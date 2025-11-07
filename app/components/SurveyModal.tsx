'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { colleges } from '../../lib/colleges';
import Link from 'next/link';

type Props = {
  open: boolean;
  onClose: () => void;
};

type Answer = {
  label: string;
  tags: string[]; // tags to score
};

export default function SurveyModal({ open, onClose }: Props) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [history, setHistory] = useState<Answer[]>([]);
  const [animating, setAnimating] = useState(false);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [nextIndex, setNextIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<'left' | 'right'>('left');
  const [mounted, setMounted] = useState(false);

  const questions = useMemo(
    () => [
      {
        id: 'q1',
        question: 'Koja vrsta studija te najviše zanima?',
        options: [
          { label: 'Tehničke znanosti (programiranje, strojarstvo)', tags: ['engineering', 'technical'] },
          { label: 'Prirodne / medicinske znanosti', tags: ['medicine', 'health', 'research'] },
          { label: 'Društvene i humanističke znanosti', tags: ['social', 'humanities', 'theory'] },
          { label: 'Umjetnost i dizajn', tags: ['art', 'design', 'creative'] },
        ],
      },
      {
        id: 'q2',
        question: 'Preferiraš praktičan/stručni pristup ili teorijski?',
        options: [
          { label: 'Praktičan / stručni', tags: ['practical', 'vocational'] },
          { label: 'Teorijski / istraživački', tags: ['research', 'theory'] },
        ],
      },
      {
        id: 'q3',
        question: 'Imaš li želju za karijerom u IT / računarstvu?',
        options: [
          { label: 'Da, jako me zanima', tags: ['computer-science', 'it', 'engineering'] },
          { label: 'Ne toliko', tags: [] },
        ],
      },
      {
        id: 'q4',
        question: 'Preferiraš li studirati u većem gradu ili manjem mjestu?',
        options: [
          { label: 'Veći grad', tags: ['urban'] },
          { label: 'Manje mjesto / bliže prirodi', tags: ['rural'] },
        ],
      },
      {
        id: 'q5',
        question: 'Koliko ti je važna praktična nastava (labovi, radionice)?',
        options: [
          { label: 'Vrlo važna', tags: ['practical'] },
          { label: 'Nije presudno', tags: ['theory'] },
        ],
      },
      {
        id: 'q6',
        question: 'Zanima li te međunarodna karijera i praktične prakse u inozemstvu?',
        options: [
          { label: 'Da, jako me zanima', tags: ['international', 'internships'] },
          { label: 'Ne, ostajem lokalno', tags: [] },
        ],
      },
      {
        id: 'q7',
        question: 'Veličina grupe na predavanjima — što više voliš?',
        options: [
          { label: 'Mali brojevi, intenzivnija interakcija', tags: ['small-classes'] },
          { label: 'Velike grupe i predavanja', tags: ['large-classes'] },
        ],
      },
      {
        id: 'q8',
        question: 'Preferiraš li karijeru u poduzetništvu ili stabilnu korporativnu karijeru?',
        options: [
          { label: 'Poduzetništvo / start-up', tags: ['entrepreneurship'] },
          { label: 'Stabilna korporativna karijera', tags: ['corporate'] },
        ],
      },
    ],
    [],
  );

  const progress = Math.round(((history.length + (answers ? 1 : 0)) / questions.length) * 100);

  // confetti state (triggered when finished) — declared here before any early returns
  const [showConfetti, setShowConfetti] = useState(false);
  useEffect(() => {
    const isFinished = index >= questions.length - 1 && answers !== null && history.length === questions.length - 1;
    if (isFinished) {
      setShowConfetti(true);
      const t = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(t);
    }
    return;
  }, [index, answers, history, questions.length]);

  // reset when opening
  useEffect(() => {
    if (open) {
      setIndex(0);
      setHistory([]);
      setSelected(null);
      setAnswers(null);
      // mount animation
      setMounted(false);
      requestAnimationFrame(() => setMounted(true));
    }
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const current = questions[index];

  function choose(optionLabel: string, tags: string[]) {
    setSelected(optionLabel);
    setAnswers({ label: optionLabel, tags });
  }

  function next() {
    if (!answers) return;
    const newIndex = Math.min(questions.length - 1, index + 1);
    // prepare dual-pane transition: keep index until animation finishes
    const old = index;
    setPrevIndex(old);
    setNextIndex(newIndex);
    setHistory((h) => [...h, answers]);
    setAnswers(null);
    setSelected(null);
    // Next should slide questions to the left (prev moves left, next comes from right)
    setDirection('left');
    // ensure the DOM paints initial positions before starting the CSS transition
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimating(true)));

    setAnimating(false);
    setPrevIndex(null);
    setIndex(newIndex);
    setNextIndex(null);
  }

  function back() {
    if (history.length === 0) return;
    const newIndex = Math.max(0, index - 1);
    const h = [...history];
    const last = h.pop()!;
    // prepare dual-pane transition for back: keep index until animation finishes
    const old = index;
    setPrevIndex(old);
    setNextIndex(newIndex);
    setHistory(h);
    setAnswers(last);
    setSelected(last.label);
    // Back should slide questions to the right (prev moves right, next comes from left)
    setDirection('right');
    requestAnimationFrame(() => requestAnimationFrame(() => setAnimating(true)));

    setAnimating(false);
    setPrevIndex(null);
    setIndex(newIndex);
    setNextIndex(null);
  }

  function computeRecommendation() {
    // simple scoring: for each college, count matches between history tags and college.tags
    const tagCounts: Record<string, number> = {};
    history.forEach((a) => a.tags.forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1)));
    // include current (answers) if present
    if (answers) answers.tags.forEach((t) => (tagCounts[t] = (tagCounts[t] || 0) + 1));

    const scored = colleges.map((c) => {
      const score = (c.tags || []).reduce((s, t) => s + (tagCounts[t] || 0), 0);
      return { college: c, score };
    });
    scored.sort((a, b) => b.score - a.score);
    return scored[0]?.college || colleges[0];
  }

  const finished = index >= questions.length - 1 && answers !== null && history.length === questions.length - 1;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-200 ${mounted ? 'opacity-50' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div
        className={`relative bg-white rounded-lg shadow-2xl w-full max-w-2xl mx-4 transform transition-all duration-200 ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
      >
        <div className="p-4 border-b flex items-center justify-between bg-gradient-to-r from-indigo-500 to-pink-500 text-white rounded-t-lg">
          <div>
            <h3 className="text-lg font-semibold">🎓 Anketa — Pronađi savršeni fakultet</h3>
            <p className="text-sm opacity-80">Odgovori na nekoliko pitanja i dobit ćeš preporuku.</p>
          </div>
          <button className="text-white text-2xl leading-none" onClick={onClose} aria-label="Zatvori">
            ×
          </button>
        </div>
        {/* progress */}
        <div className="px-4 pt-3">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* confetti overlay when finished */}
        {showConfetti && (
          <div className="pointer-events-none absolute inset-0 z-40 overflow-hidden">
            {Array.from({ length: 24 }).map((_, i) => {
              const left = Math.random() * 100;
              const colors = ['#f97316', '#f43f5e', '#60a5fa', '#34d399', '#a78bfa'];
              const bg = colors[i % colors.length];
              const delay = (i % 6) * 0.08;
              return (
                <span
                  key={i}
                  className="confetti-piece absolute w-2 h-4 rounded-sm"
                  style={{ left: `${left}%`, background: bg, animationDelay: `${delay}s` }}
                />
              );
            })}
            <style jsx>{`
              .confetti-piece {
                top: -10%;
                opacity: 0.95;
              }
              @keyframes confettiFall {
                0% {
                  transform: translateY(-10vh) rotate(0deg);
                  opacity: 1;
                }
                100% {
                  transform: translateY(110vh) rotate(720deg);
                  opacity: 0.9;
                }
              }
              .confetti-piece {
                animation: confettiFall 3000ms linear forwards;
              }
            `}</style>
          </div>
        )}

        <div className="p-6 max-h-[70vh]">
          {!finished ? (
            <div>
              <div className="mb-4 text-sm text-gray-600">
                Pitanje {index + 1} od {questions.length}
              </div>

              <div className="relative overflow-hidden">
                {prevIndex !== null && nextIndex !== null ? (
                  // show dual panes when prevIndex is set; animating toggles the transition
                  <>
                    {/* previous pane (the one sliding out) */}
                    <div
                      className={
                        'absolute inset-0 ' +
                        (direction === 'left'
                          ? animating
                            ? 'transform -translate-x-full transition-transform duration-300'
                            : 'transform translate-x-0'
                          : animating
                          ? 'transform translate-x-full transition-transform duration-300'
                          : 'transform translate-x-0')
                      }
                    >
                      <h4 className="text-xl font-medium mb-4">{questions[prevIndex].question}</h4>
                      <div className="space-y-3">
                        {questions[prevIndex].options.map((o) => (
                          <div
                            key={o.label}
                            className="w-full text-left p-3 rounded-lg border border-gray-200 bg-white opacity-80"
                          >
                            {o.label}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* current pane (the one sliding in) */}
                    <div
                      className={
                        'absolute inset-0 ' +
                        (direction === 'left'
                          ? animating
                            ? 'transform translate-x-0 transition-transform duration-300'
                            : 'transform translate-x-full'
                          : animating
                          ? 'transform translate-x-0 transition-transform duration-300'
                          : 'transform -translate-x-full')
                      }
                    >
                      <h4 className="text-xl font-medium mb-4">{questions[nextIndex].question}</h4>
                      <div className="space-y-3">
                        {questions[nextIndex].options.map((o) => (
                          <button
                            key={o.label}
                            onClick={() => choose(o.label, o.tags)}
                            className={`w-full text-left p-3 rounded-lg border ${
                              selected === o.label ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-white'
                            }`}
                          >
                            {o.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div>
                    <h4 className="text-xl font-medium mb-4">{current.question}</h4>
                    <div className="space-y-3">
                      {current.options.map((o) => (
                        <button
                          key={o.label}
                          onClick={() => choose(o.label, o.tags)}
                          className={`w-full text-left p-3 rounded-lg border ${
                            selected === o.label ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200 bg-white'
                          }`}
                        >
                          {o.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="p-6 overflow-auto">
              <h4 className="text-xl font-medium mb-2">Preporuka</h4>
              <p className="text-sm text-gray-600 mb-4">Na temelju tvojih odgovora, preporučamo sljedeći fakultet:</p>
              {(() => {
                const rec = computeRecommendation();
                return (
                  <div className="p-4 border rounded-lg bg-gray-50">
                    <h5 className="text-lg font-semibold">{rec.name}</h5>
                    <p className="text-sm text-gray-700 mt-2">{rec.description}</p>
                    <div className="mt-4">
                      <Link
                        href={`/colleges/${rec.id}`}
                        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded"
                      >
                        Pogledaj fakultet
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>

        <div className="p-4 border-t flex items-center justify-between">
          <div>
            <button
              className="px-4 py-2 mr-2 rounded border"
              onClick={() => {
                if (index === 0) return onClose();
                back();
              }}
            >
              Nazad
            </button>
          </div>
          <div>
            {!finished ? (
              <button
                className={`px-4 py-2 rounded text-white ${answers ? 'bg-indigo-600' : 'bg-gray-300'}`}
                onClick={() => {
                  if (!answers) return;
                  if (index < questions.length - 1) next();
                }}
                disabled={!answers}
              >
                {index < questions.length - 1 ? 'Sljedeće' : 'Završi'}
              </button>
            ) : (
              <button className="px-4 py-2 rounded bg-indigo-600 text-white" onClick={onClose}>
                Zatvori
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
