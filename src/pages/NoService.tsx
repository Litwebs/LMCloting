const NoService = () => {
  return (
    <div className="min-h-screen bg-muted flex flex-col overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #a78bfa, #6366f1)",
            animation: "blob1 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #f472b6, #fb923c)",
            animation: "blob2 10s ease-in-out infinite",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl"
          style={{
            background: "radial-gradient(circle, #1d3f69, #1d3f69)",
            animation: "blob1 12s ease-in-out infinite reverse",
          }}
        />
      </div>

      <style>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 20px) scale(1.05); }
          66% { transform: translate(20px, -30px) scale(0.95); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fade-up 0.7s cubic-bezier(.22,1,.36,1) both; }
        .fade-up-delay-1 { animation: fade-up 0.7s 0.15s cubic-bezier(.22,1,.36,1) both; }
        .fade-up-delay-2 { animation: fade-up 0.7s 0.3s cubic-bezier(.22,1,.36,1) both; }
        .fade-up-delay-3 { animation: fade-up 0.7s 0.45s cubic-bezier(.22,1,.36,1) both; }
        .spin-slow { animation: spin-slow 3s linear infinite; }
      `}</style>

      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="text-center max-w-lg px-6">
          {/* Animated gear icon */}
          <div className="fade-up flex justify-center mb-8">
            <div className="relative w-24 h-24">
              <svg
                className="spin-slow w-24 h-24 opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#1d3f69"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M19.622 10.395l-1.097-2.65L20 6l-2-2-1.735 1.483-2.707-1.113L12.935 2h-1.954l-.632 2.401-2.645 1.115L6 4 4 6l1.453 1.789-1.08 2.657L2 11v2l2.401.655L5.516 16.3 4 18l2 2 1.791-1.46 2.606 1.072L11 22h2l.604-2.401 2.651-1.108L18 20l2-2-1.484-1.75 1.098-2.648L22 13v-2l-2.378-.605Z" />
              </svg>
              <div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ background: "rgba(29,63,105,0.15)" }}
              />
            </div>
          </div>

          <h1 className="fade-up-delay-1 font-heading text-4xl sm:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Service Unavailable
          </h1>

          <p className="fade-up-delay-2 text-muted-foreground text-lg mb-8 leading-relaxed">
            Please check back soon.
          </p>

          <div className="fade-up-delay-3 flex flex-col items-center gap-4"></div>
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          0% { transform: translateX(-100%); width: 40%; }
          50% { width: 60%; }
          100% { transform: translateX(260px); width: 40%; }
        }
      `}</style>

      <div className="relative z-10 pb-6 text-center">
        <a
          href="https://litwebs.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted-foreground/50 hover:text-muted-foreground transition-colors"
        >
          Powered by LITWEBS
        </a>
      </div>
    </div>
  );
};

export default NoService;
