"use client";

import React, { useState, use } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";
import { ArrowLeft, Share2, Info, Users, Clock, AlertCircle, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const EventDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);
  const [selectedBuffalo, setSelectedBuffalo] = useState<"A" | "B" | null>(null);
  const [stake, setStake] = useState<string>("");
  const [isVerified, setIsVerified] = useState(true);

  const matchData = {
    id: id,
    name: "Match #12: The Grand Arena",
    status: "Open" as const,
    time: "Mar 6, 2026 14:00",
    countdown: "00:19:42",
    pool: "2,400 WLD",
    players: 34,
    buffaloA: { name: "Rambu", owner: "Datu Polopadang", record: "8W - 2L", winRate: 80, photo: "🐃" },
    buffaloB: { name: "Tanduk", owner: "Ne' Linggi", record: "6W - 3L", winRate: 67, photo: "🐃" },
  };

  const handlePredict = () => {
     if (!selectedBuffalo || !stake) return;
     alert(`Predicted ${selectedBuffalo === "A" ? matchData.buffaloA.name : matchData.buffaloB.name} with ${stake} WLD!`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      <Header />
      
      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        {/* Cultural Accent */}
        <div className="absolute top-0 bottom-0 left-0 w-1 toraja-pattern opacity-10" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 w-full">
          {/* Breadcrumb & Actions */}
          <div className="flex items-center justify-between mb-10 w-full">
            <Link href="/markets" className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition-all font-bold group">
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Markets
            </Link>
            <div className="flex items-center gap-3">
                <button className="p-2.5 bg-bg-surface-raised border border-border-default rounded-lg text-text-secondary hover:text-text-primary transition-all hover:border-border-hover">
                   <Share2 size={18} />
                </button>
                <div className="p-2.5 bg-bg-surface-raised border border-border-default rounded-lg text-text-secondary hover:text-text-primary transition-all hover:border-border-hover">
                   <Info size={18} />
                </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Content: Buffalo Comparison & Stats (span 8) */}
            <div className="lg:col-span-8 flex flex-col gap-10">
               {/* Header Area */}
               <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 flex-wrap">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-widest">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        Live: Open
                      </span>
                      <span className="text-text-tertiary text-sm flex items-center gap-1.5">
                         <div className="w-1.5 h-1.5 rounded-full bg-text-tertiary" />
                         {matchData.time}
                      </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-heading font-bold">{matchData.name}</h1>
               </div>

               {/* Buffalo Comparison UI */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative py-12">
                  {/* VS Indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block">
                     <div className="w-16 h-16 bg-bg-base border border-border-default rounded-full flex items-center justify-center font-heading font-black italic text-2xl text-text-tertiary shadow-2xl">
                        VS
                     </div>
                  </div>

                  {/* Buffalo A */}
                  <div 
                    onClick={() => setSelectedBuffalo("A")}
                    className={`bg-bg-surface-raised border p-8 rounded-2xl flex flex-col items-center gap-6 cursor-pointer transition-all duration-300 relative group ${
                        selectedBuffalo === "A" ? "predict-a-glow scale-[1.02]" : "border-border-default hover:border-border-hover"
                    }`}>
                      <div className="w-32 h-32 rounded-full bg-bg-surface border border-border-default flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                         {matchData.buffaloA.photo}
                      </div>
                      <div className="text-center">
                          <h3 className="text-2xl font-bold font-heading mb-1">{matchData.buffaloA.name}</h3>
                          <p className="text-text-secondary text-sm mb-4">Owner: <span className="text-text-primary font-bold">{matchData.buffaloA.owner}</span></p>
                          <div className="flex items-center gap-3 text-xs justify-center font-bold tracking-widest">
                             <span className="px-2 py-0.5 bg-bg-surface rounded uppercase border border-border-default">Record: {matchData.buffaloA.record}</span>
                             <span className="text-green-500">Win: {matchData.buffaloA.winRate}%</span>
                          </div>
                      </div>
                      {selectedBuffalo === "A" && (
                         <div className="absolute top-4 right-4 text-green-500">
                             <CheckCircle size={24} />
                         </div>
                      )}
                  </div>

                  {/* Buffalo B */}
                  <div 
                    onClick={() => setSelectedBuffalo("B")}
                    className={`bg-bg-surface-raised border p-8 rounded-2xl flex flex-col items-center gap-6 cursor-pointer transition-all duration-300 relative group ${
                        selectedBuffalo === "B" ? "predict-b-glow scale-[1.02]" : "border-border-default hover:border-border-hover"
                    }`}>
                      <div className="w-32 h-32 rounded-full bg-bg-surface border border-border-default flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                         {matchData.buffaloB.photo}
                      </div>
                      <div className="text-center">
                          <h3 className="text-2xl font-bold font-heading mb-1">{matchData.buffaloB.name}</h3>
                          <p className="text-text-secondary text-sm mb-4">Owner: <span className="text-text-primary font-bold">{matchData.buffaloB.owner}</span></p>
                          <div className="flex items-center gap-3 text-xs justify-center font-bold tracking-widest">
                             <span className="px-2 py-0.5 bg-bg-surface rounded uppercase border border-border-default">Record: {matchData.buffaloB.record}</span>
                             <span className="text-red-500">Win: {matchData.buffaloB.winRate}%</span>
                          </div>
                      </div>
                      {selectedBuffalo === "B" && (
                         <div className="absolute top-4 right-4 text-red-500">
                             <CheckCircle size={24} />
                         </div>
                      )}
                  </div>
               </div>

               {/* Stats Area */}
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                   {[
                       { label: "Total Pool", value: matchData.pool, icon: <TrendingUp size={16} /> },
                       { label: "Players", value: matchData.players, icon: <Users size={16} /> },
                       { label: "Predicting Lock", value: matchData.countdown, icon: <Clock size={16} /> }
                   ].map((stat, i) => (
                       <div key={i} className="p-6 bg-bg-surface border border-border-default rounded-xl flex flex-col gap-2">
                           <span className="text-[10px] uppercase font-bold tracking-widest text-text-tertiary flex items-center gap-2">
                               {stat.icon} {stat.label}
                           </span>
                           <span className="text-2xl font-bold font-heading text-text-primary">{stat.value}</span>
                       </div>
                   ))}
               </div>
            </div>

            {/* Right Content: Prediction Panel (span 4) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit flex flex-col gap-6">
                <div className="bg-bg-surface-raised border border-border-default rounded-2xl p-8 flex flex-col gap-8 shadow-2xl relative overflow-hidden">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-primary/5 blur-[40px] pointer-events-none" />
                    
                    <div>
                        <h2 className="text-2xl font-bold font-heading mb-2">Place Prediction</h2>
                        <p className="text-text-secondary text-sm">Select your champion and enter stake.</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Selected Buffalo Preview */}
                        <div className="flex gap-4">
                           <div className={`flex-1 p-4 rounded-xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                               selectedBuffalo === 'A' ? 'bg-predict-a/10 border-predict-a text-predict-a' : 'bg-bg-base/50 border-border-default text-text-tertiary opacity-40 grayscale'
                           }`} onClick={() => setSelectedBuffalo("A")}>
                               <span className="text-3xl text-text-primary">🐃</span>
                               <span className="text-xs font-bold font-heading">BUFFALO A</span>
                           </div>
                           <div className={`flex-1 p-4 rounded-xl border flex flex-col items-center gap-2 transition-all cursor-pointer ${
                               selectedBuffalo === 'B' ? 'bg-predict-b/10 border-predict-b text-predict-b' : 'bg-bg-base/50 border-border-default text-text-tertiary opacity-40 grayscale'
                           }`} onClick={() => setSelectedBuffalo("B")}>
                               <span className="text-3xl text-text-primary">🐃</span>
                               <span className="text-xs font-bold font-heading">BUFFALO B</span>
                           </div>
                        </div>

                        {/* Stake Input */}
                        <div className="flex flex-col gap-3">
                            <label className="text-xs uppercase font-bold tracking-widest text-text-tertiary">Select Stake (WLD)</label>
                            <div className="relative">
                                <input 
                                    type="number" 
                                    value={stake}
                                    onChange={(e) => setStake(e.target.value)}
                                    placeholder="0.00"
                                    className="w-full bg-bg-base border border-border-default rounded-lg py-4 px-6 text-xl font-bold font-heading focus:outline-none focus:border-accent-primary transition-all pr-20"
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-bold text-text-tertiary">WLD</div>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                               {([10, 50, 100] as const).map(amt => (
                                   <button 
                                      key={amt} 
                                      onClick={() => setStake(amt.toString())}
                                      className={`py-2 px-3 bg-bg-base border rounded-md text-xs font-bold transition-all ${
                                          stake === amt.toString() ? 'border-accent-primary text-accent-primary' : 'border-border-default text-text-tertiary hover:border-border-hover'
                                      }`}>
                                       +{amt}
                                   </button>
                               ))}
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="p-4 bg-bg-base border border-border-default rounded-xl flex flex-col gap-3">
                            <div className="flex items-center justify-between text-xs text-text-secondary">
                                <span>Estimated Reward</span>
                                <span className="text-text-primary font-bold">≈ {stake ? (Number(stake) * 1.84).toFixed(2) : "0.00"} WLD</span>
                            </div>
                            <div className="flex items-center justify-between text-xs text-text-secondary">
                                <span>Platform Fee</span>
                                <span className="text-text-primary font-bold">2.5%</span>
                            </div>
                            <div className="h-px bg-border-default" />
                            <div className="flex items-center justify-between text-sm font-bold">
                                <span>Total Stake</span>
                                <span className="text-accent-primary">{stake || "0"} WLD</span>
                            </div>
                        </div>

                        {/* World ID Indicator */}
                        {isVerified ? (
                          <div className="flex items-center gap-2 p-3 bg-green-500/5 border border-green-500/20 rounded-lg text-green-500 text-xs font-bold">
                             <ShieldCheck size={16} />
                             World ID Verified: Eligible for Prediction
                          </div>
                        ) : (
                          <div className="flex items-center gap-2 p-3 bg-amber-500/5 border border-amber-500/20 rounded-lg text-amber-500 text-xs font-bold">
                             <AlertCircle size={16} />
                             Verification Required to Place Stake
                          </div>
                        )}

                        <Button 
                            variant={selectedBuffalo ? "primary" : "secondary"} 
                            size="lg" 
                            disabled={!selectedBuffalo || !stake || !isVerified}
                            onClick={handlePredict}
                            className="w-full h-14"
                        >
                            {isVerified ? "Confirm Prediction" : "Verify to Predict"}
                        </Button>
                    </div>
                </div>
                
                {/* Secondary Info */}
                <div className="bg-bg-surface border border-border-default rounded-xl p-6 flex items-center gap-4 group cursor-help transition-all hover:bg-bg-surface-raised">
                     <span className="text-2xl">🔥</span>
                     <div>
                         <span className="text-sm font-bold block text-text-primary">Current Hot Streak: +4</span>
                         <span className="text-xs text-text-secondary">Win this match to unlock the Silver Buffalo badge.</span>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventDetailPage;
