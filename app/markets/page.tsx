"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MatchCard from "@/components/MatchCard";
import { Filter, Search, TrendingUp, Calendar, CheckCircle, Clock } from "lucide-react";

const ALL_MATCHES = [
  {
    id: "1",
    buffaloA: { name: "Rambu", photo: "🐃" },
    buffaloB: { name: "Tanduk", photo: "🐃" },
    time: "Starts in 00:19:42",
    pool: "2,400 WLD",
    players: 34,
    status: "Open" as const,
  },
  {
    id: "4",
    buffaloA: { name: "Putra", photo: "🐃" },
    buffaloB: { name: "Sakti", photo: "🐃" },
    time: "Starts in 2h 15m",
    pool: "850 USDC",
    players: 31,
    status: "Open" as const,
  },
  {
    id: "5",
    buffaloA: { name: "Mega", photo: "🐃" },
    buffaloB: { name: "Watt", photo: "🐃" },
    time: "Starts in 5h 30m",
    pool: "1,200 WLD",
    players: 18,
    status: "Open" as const,
  },
  {
    id: "2",
    buffaloA: { name: "Gorila", photo: "🐃" },
    buffaloB: { name: "Byson", photo: "🐃" },
    time: "Mar 15, 14:00",
    pool: "Unknown",
    players: 12,
    status: "Locked" as const,
  },
  {
    id: "3",
    buffaloA: { name: "Silaga", photo: "🐃" },
    buffaloB: { name: "Toraja", photo: "🐃" },
    time: "Resolved 2h ago",
    pool: "1,200 WLD",
    players: 8,
    status: "Resolved" as const,
  },
  {
    id: "6",
    buffaloA: { name: "Putra", photo: "🐃" },
    buffaloB: { name: "Sakti", photo: "🐃" },
    time: "Resolved 1d ago",
    pool: "1,450 USDC",
    players: 45,
    status: "Resolved" as const,
  },
];

const MarketsPage = () => {
  const [activeFilter, setActiveFilter] = useState<"All" | "Open" | "Locked" | "Resolved">("All");

  const filteredMatches = activeFilter === "All" 
    ? ALL_MATCHES 
    : ALL_MATCHES.filter(m => m.status === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-bg-base">
      <Header />
      
      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col gap-10">
            {/* Header Area */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl md:text-5xl font-heading font-bold">Arena Markets</h1>
                <p className="text-text-secondary">Discover live, upcoming, and settled buffalo matches across Tana Toraja.</p>
              </div>
              
              <div className="flex items-center gap-3 p-1.5 bg-bg-surface border border-border-default rounded-lg">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary" size={16} />
                  <input 
                    type="text" 
                    placeholder="Search Buffalo..." 
                    className="bg-bg-base border border-border-default rounded-md py-1.5 pl-9 pr-4 text-sm focus:outline-none focus:border-accent-primary transition-colors min-w-[200px]"
                  />
                </div>
              </div>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-6 border-b border-border-default pb-8">
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-text-tertiary mr-2" />
                {(["All", "Open", "Locked", "Resolved"] as const).map(filter => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                      activeFilter === filter 
                      ? "bg-accent-primary text-white shadow-glow" 
                      : "bg-bg-surface-raised border border-border-default text-text-secondary hover:text-text-primary hover:border-border-hover"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-tertiary">Live Markets</span>
                  <span className="font-heading font-bold text-accent-primary flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-primary animate-pulse" />
                    3 Active
                  </span>
                </div>
                <div className="w-px h-8 bg-border-default" />
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-text-tertiary">Total Volume</span>
                  <span className="font-heading font-bold text-text-primary">124.5k WLD</span>
                </div>
              </div>
            </div>

            {/* Markets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredMatches.map(match => (
                 <MatchCard key={match.id} {...match} />
               ))}
            </div>
            
            {filteredMatches.length === 0 && (
                <div className="py-32 flex flex-col items-center justify-center text-center gap-6">
                    <div className="w-20 h-20 bg-bg-surface-raised rounded-full flex items-center justify-center border border-border-default shadow-lg">
                        <Calendar size={32} className="text-text-tertiary opacity-40" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold font-heading mb-2">No Matches Found</h3>
                        <p className="text-text-secondary">Try adjusting your filters or search criteria.</p>
                    </div>
                </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MarketsPage;
