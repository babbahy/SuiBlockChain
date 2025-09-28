import { createContext, useContext, useMemo, useState } from "react";
import type { EphemeralBundle, JwtPayload } from "./helpers";

export interface ZkSession {
  jwt?: string;
  jwtPayload?: JwtPayload;
  userSalt?: string; // store as string
  address?: string;
  ephemeral?: EphemeralBundle; // DO NOT persist; keep in-memory/session only
  maxEpoch?: number;
  partialProof?: unknown;
}

export interface ZkSessionContextValue {
  session: ZkSession;
  setSession: (s: ZkSession) => void;
  clear: () => void;
}

const ZkSessionContext = createContext<ZkSessionContextValue | null>(null);

export function ZkSessionProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<ZkSession>({});
  const value = useMemo(() => ({
    session,
    setSession: (s: ZkSession) => setSession(s),
    clear: () => setSession({}),
  }), [session]);
  return <ZkSessionContext.Provider value={value}>{children}</ZkSessionContext.Provider>;
}

export function useZkSession() {
  const ctx = useContext(ZkSessionContext);
  if (!ctx) throw new Error("ZkSessionProvider missing");
  return ctx;
}

