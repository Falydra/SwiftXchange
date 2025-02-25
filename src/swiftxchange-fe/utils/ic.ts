import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../declarations/swiftxchange";

// Fetch the canister ID dynamically
const IC_PROJECT_BACKEND_ID = process.env.NEXT_PUBLIC_IC_BACKEND_ID || "bkyz2-fmaaa-aaaaa-qaaaq-cai";

const agent = new HttpAgent({ host: "http://localhost:4943" });

export const backendActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: IC_PROJECT_BACKEND_ID,
});
