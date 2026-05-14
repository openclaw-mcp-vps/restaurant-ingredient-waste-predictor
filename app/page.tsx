export default function Home() {
  const faqs = [
    {
      q: "How does the waste prediction work?",
      a: "Our AI analyzes your historical sales data alongside local weather forecasts and upcoming events to predict ingredient demand with high accuracy, so you order only what you need."
    },
    {
      q: "Do I need technical knowledge to use it?",
      a: "No. The dashboard is designed for restaurant owners and managers. Simply upload your sales data or connect your POS system and get predictions instantly."
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes. There are no long-term contracts. Cancel anytime from your billing portal with no questions asked."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          AI-Powered for Restaurants
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Food Waste.<br />Optimize Every Order.
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          WasteLess analyzes your sales history, local weather, and upcoming events to forecast exactly what ingredients you need — cutting waste and saving money.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Reducing Waste — $18/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="border border-[#30363d] rounded-2xl p-8 bg-[#161b22] text-center">
          <h2 className="text-xl font-bold text-white mb-1">Pro Plan</h2>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to eliminate food waste</p>
          <div className="text-5xl font-extrabold text-white mb-1">
            $18<span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-8">per restaurant location</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "AI ingredient demand forecasting",
              "Weather & local event integration",
              "Sales data import (CSV / POS sync)",
              "Weekly waste reduction reports",
              "Email alerts for high-risk items",
              "Unlimited historical data storage"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-xl p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} WasteLess. All rights reserved.
      </footer>
    </main>
  );
}
