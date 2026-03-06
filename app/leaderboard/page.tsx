"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trophy, Flame, TrendingUp, Users, ChevronRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const LEADERBOARD_DATA = [
  { rank: 1, name: "Player_0x12..5678", winRate: "92%", reward: "+12,240 WLD", matches: 48, streak: 8, avatar: "👤" },
  { rank: 2, name: "Player_0xAB..9012", winRate: "87%", reward: "+9,980 WLD", matches: 41, streak: 5, avatar: "👤" },
  { rank: 3, name: "Player_0x7F..3456", winRate: "85%", reward: "+8,870 WLD", matches: 39, streak: 4, avatar: "👤" },
  { rank: 4, name: "Player_0x98..1122", winRate: "82%", reward: "+7,210 USDC", matches: 35, streak: 3, avatar: "👤" },
  { rank: 5, name: "Player_0x44..3344", winRate: "80%", reward: "+6,650 WLD", matches: 33, streak: 2, avatar: "👤" },
  { rank: 6, name: "Player_0xDE..5566", winRate: "78%", reward: "+5,420 WLD", matches: 30, streak: 0, avatar: "👤" },
  { rank: 7, name: "Player_0x11..7788", winRate: "76%", reward: "+4,910 USDC", matches: 28, streak: 1, avatar: "👤" },
  { rank: 8, name: "Player_0x90..9900", winRate: "75%", reward: "+4,240 WLD", matches: 25, streak: 2, avatar: "👤" },
];

const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState<"Today" | "Week" | "All-Time">("Week");

  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-toraja-gold font-bold tracking-[0.2em] uppercase text-xs">Global Rankings</div>
                <h1 className="text-4xl md:text-5xl font-heading font-bold">The Hall of Fame</h1>
                <p className="text-text-secondary">Track the top-performing predictors across the arena's history.</p>
              </div>

              {/* Stats Highlights */}
              <div className="flex items-center gap-8 bg-bg-surface border border-border-default rounded-xl p-6 shadow-xl">
                  <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-text-tertiary">Total Players</span>
                      <span className="text-xl font-bold font-heading">12,420</span>
                  </div>
                  <div className="w-px h-8 bg-border-default" />
                  <div className="flex flex-col gap-1">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-text-tertiary">Current Season</span>
                      <span className="text-xl font-bold font-heading text-toraja-gold">S1: Toraja Rise</span>
                  </div>
              </div>
            </div>

            {/* Navigation & Search */}
            <div className="flex flex-wrap items-center justify-between gap-8 border-b border-border-default pb-8">
                <div className="flex items-center gap-2">
                    {(["Today", "Week", "All-Time"] as const).map(tab => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`px-5 py-2.5 rounded-lg text-sm font-bold transition-all ${
                              activeTab === tab 
                              ? "bg-accent-primary text-white shadow-glow" 
                              : "bg-bg-surface-raised border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover"
                          }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                    <input 
                      type="text" 
                      placeholder="Search Player..." 
                      className="bg-bg-base border border-border-default rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-accent-primary transition-colors min-w-[240px]"
                    />
                </div>
            </div>

            {/* Leaderboard Table Area */}
            <div className="flex flex-col gap-4">
                {/* Desktop Header */}
                <div className="hidden md:grid grid-cols-12 px-8 py-4 bg-bg-surface-raised border border-border-default rounded-xl text-[10px] uppercase font-bold tracking-[0.2em] text-text-tertiary">
                    <div className="col-span-1">Rank</div>
                    <div className="col-span-4">Player</div>
                    <div className="col-span-2 text-right">Win Rate</div>
                    <div className="col-span-3 text-right">Total Rewards</div>
                    <div className="col-span-2 text-right">Matches</div>
                </div>

                {/* Rows */}
                {LEADERBOARD_DATA.map((player) => (
                    <div 
                      key={player.rank}
                      className={`grid grid-cols-12 items-center px-8 py-6 bg-bg-surface border rounded-xl transition-all cursor-pointer relative group overflow-hidden ${
                          player.rank <= 3 ? "border-toraja-gold/30 hover:shadow-gold" : "border-border-default hover:border-border-hover"
                      }`}>
                         {/* Rank Column */}
                         <div className="col-span-1 flex items-center gap-2">
                             {player.rank === 1 ? <Trophy size={20} className="text-toraja-gold fill-toraja-gold" /> : player.rank === 2 ? "🥈" : player.rank === 3 ? "🥉" : player.rank}
                         </div>

                         {/* Player Column */}
                         <div className="col-span-11 md:col-span-4 flex items-center gap-4">
                             <div className="w-10 h-10 rounded-full bg-bg-base border border-border-default flex items-center justify-center text-xl">
                                {player.avatar}
                             </div>
                             <div className="flex flex-col gap-1">
                                <span className="font-bold text-text-primary group-hover:text-accent-primary transition-colors">{player.name}</span>
                                <div className="flex items-center gap-2">
                                  {player.streak > 0 && (
                                    <span className="flex items-center gap-1 text-[10px] font-bold text-toraja-gold uppercase">
                                       <Flame size={12} fill="currentColor" /> {player.streak} Streak
                                    </span>
                                  )}
                                  <span className="w-1 h-1 rounded-full bg-text-tertiary" />
                                  <span className="text-[10px] text-text-tertiary uppercase font-bold">World ID Verified</span>
                                </div>
                             </div>
                         </div>

                         {/* Stats (Mobile hidden) */}
                         <div className="hidden md:block col-span-2 text-right font-bold text-text-primary">{player.winRate}</div>
                         <div className="hidden md:block col-span-3 text-right font-bold text-text-primary text-green-500">{player.reward}</div>
                         <div className="hidden md:block col-span-2 text-right font-bold text-text-primary">{player.matches}</div>

                         {/* Mobile Arrow */}
                         <div className="md:hidden absolute right-6 top-1/2 -translate-y-1/2">
                            <ChevronRight size={20} className="text-text-tertiary" />
                         </div>

                         {/* Background Pattern for Winners */}
                         {player.rank <= 3 && (
                            <div className="absolute top-0 right-0 w-32 h-32 bg-toraja-gold/5 blur-[40px] pointer-events-none" />
                         )}
                    </div>
                ))}
            </div>
            
            <div className="py-10 text-center text-text-tertiary text-sm">
                Showing 8 of 12,420 gladiators.
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LeaderboardPage;
