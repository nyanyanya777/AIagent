"use client";

import { useState, useEffect } from "react";
import SignUp from "@/components/screens/SignUp";
import IntegrationSelection from "@/components/screens/IntegrationSelection";
import RoleSelection from "@/components/screens/RoleSelection";
import TaskSelection from "@/components/screens/TaskSelection";
import Analyzing from "@/components/screens/Analyzing";
import Dashboard from "@/components/screens/Dashboard";
import Works from "@/components/screens/Works";
import Agents from "@/components/screens/Agents";
import Reports from "@/components/screens/Reports";
import ConnectionSettings from "@/components/screens/ConnectionSettings";
import AccountSettings from "@/components/screens/AccountSettings";

export default function Home() {
  const [screen, setScreen] = useState("signup");

  const navigate = (id: string) => setScreen(id);

  const screens: Record<string, React.ReactNode> = {
    signup: <SignUp onNext={() => setScreen("integration")} />,
    integration: <IntegrationSelection onNext={() => setScreen("role")} />,
    role: <RoleSelection onNext={() => setScreen("task")} />,
    task: <TaskSelection onNext={() => setScreen("analyzing")} />,
    analyzing: <Analyzing onNext={() => setScreen("dashboard")} />,
    dashboard: <Dashboard onNavigate={navigate} />,
    works: <Works onNavigate={navigate} />,
    agents: <Agents onNavigate={navigate} />,
    reports: <Reports onNavigate={navigate} />,
    connections: <ConnectionSettings onNavigate={navigate} />,
    account: <AccountSettings onNavigate={navigate} />,
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-zinc-50">
      {screens[screen] || <Dashboard onNavigate={navigate} />}
    </div>
  );
}
