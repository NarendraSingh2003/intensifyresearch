import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StockItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const stockData: StockItem[] = [
  { symbol: "NIFTY 50", name: "NSE Index", price: "24,677.80", change: "+0.72%", isPositive: true },
  { symbol: "SENSEX", name: "BSE Index", price: "81,224.75", change: "+0.65%", isPositive: true },
  { symbol: "BANKNIFTY", name: "Bank Nifty", price: "53,892.45", change: "+1.12%", isPositive: true },
  { symbol: "RELIANCE", name: "Reliance Ind", price: "2,924.50", change: "-0.32%", isPositive: false },
  { symbol: "TCS", name: "TCS Ltd", price: "4,187.25", change: "+0.89%", isPositive: true },
  { symbol: "INFY", name: "Infosys", price: "1,892.40", change: "+1.45%", isPositive: true },
  { symbol: "HDFC", name: "HDFC Bank", price: "1,654.80", change: "-0.18%", isPositive: false },
  { symbol: "ITC", name: "ITC Ltd", price: "478.65", change: "+0.52%", isPositive: true },
  { symbol: "TATAMOTORS", name: "Tata Motors", price: "987.30", change: "+2.34%", isPositive: true },
  { symbol: "BHARTIARTL", name: "Bharti Airtel", price: "1,567.20", change: "+0.78%", isPositive: true },
];

const StockTicker = () => {
  const [stocks] = useState<StockItem[]>([...stockData, ...stockData]);

  return (
    <div className="bg-secondary backdrop-blur-sm border-b border-secondary/50 overflow-hidden py-2">
      <div className="flex items-center">
        <div className="bg-primary/30 px-4 py-1 flex items-center gap-2 z-10 shrink-0">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="font-orbitron text-xs text-primary font-semibold tracking-wider">LIVE</span>
        </div>
        <div className="flex animate-ticker">
          {stocks.map((stock, index) => (
            <div
              key={`${stock.symbol}-${index}`}
              className="flex items-center gap-3 px-6 border-r border-white/10 whitespace-nowrap"
            >
              <span className="font-orbitron text-sm font-semibold text-white">
                {stock.symbol}
              </span>
              <span className="text-sm text-white/70">₹{stock.price}</span>
              <div className={`flex items-center gap-1 ${stock.isPositive ? 'text-stock-green' : 'text-stock-red'}`}>
                {stock.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span className="font-orbitron text-xs font-medium">{stock.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockTicker;
