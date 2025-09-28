export type ZkProvider = "google" | "facebook" | "twitch" | "kakao" | "apple" | "slack" | "microsoft";

export interface ZkLoginEnv {
  provider: ZkProvider;
  clientId: string;
  redirectUrl: string;
  proverUrl?: string; // default to https://prover-dev.mystenlabs.com/v1 for devnet
  rpcUrl?: string; // default to devnet fullnode when not provided
}

export const DEFAULT_PROVER_URL = "https://prover-dev.mystenlabs.com/v1"; // Devnet only

export const getAuthUrl = (env: ZkLoginEnv, nonce: string) => {
  const base = (() => {
    switch (env.provider) {
      case "google":
        return `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(env.clientId)}&response_type=id_token&redirect_uri=${encodeURIComponent(env.redirectUrl)}&scope=openid&nonce=${encodeURIComponent(nonce)}`;
      case "facebook":
        return `https://www.facebook.com/v17.0/dialog/oauth?client_id=${encodeURIComponent(env.clientId)}&redirect_uri=${encodeURIComponent(env.redirectUrl)}&scope=openid&nonce=${encodeURIComponent(nonce)}&response_type=id_token`;
      case "twitch":
        return `https://id.twitch.tv/oauth2/authorize?client_id=${encodeURIComponent(env.clientId)}&force_verify=true&lang=en&login_type=login&redirect_uri=${encodeURIComponent(env.redirectUrl)}&response_type=id_token&scope=openid&nonce=${encodeURIComponent(nonce)}`;
      case "kakao":
        return `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${encodeURIComponent(env.clientId)}&redirect_uri=${encodeURIComponent(env.redirectUrl)}&nonce=${encodeURIComponent(nonce)}`;
      case "apple":
        return `https://appleid.apple.com/auth/authorize?client_id=${encodeURIComponent(env.clientId)}&redirect_uri=${encodeURIComponent(env.redirectUrl)}&scope=email&response_mode=form_post&response_type=code%20id_token&nonce=${encodeURIComponent(nonce)}`;
      case "slack":
        return `https://slack.com/openid/connect/authorize?response_type=code&client_id=${encodeURIComponent(env.clientId)}&redirect_uri=${encodeURIComponent(env.redirectUrl)}&nonce=${encodeURIComponent(nonce)}&scope=openid`;
      case "microsoft":
        return `https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=${encodeURIComponent(env.clientId)}&scope=openid&response_type=id_token&nonce=${encodeURIComponent(nonce)}&redirect_uri=${encodeURIComponent(env.redirectUrl)}`;
      default:
        throw new Error("Unsupported provider");
    }
  })();
  return base;
};

