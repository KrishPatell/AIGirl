import React, { useState, useEffect } from 'react';

const ROASCalculator: React.FC = () => {
  const [spend, setSpend] = useState<string>('1000');
  const [revenue, setRevenue] = useState<string>('3500');
  const [cogs, setCogs] = useState<string>('30');

  const [roas, setRoas] = useState<string>('—');
  const [breakEven, setBreakEven] = useState<string>('—');
  const [profit, setProfit] = useState<string>('—');
  const [margin, setMargin] = useState<string>('—');
  const [status, setStatus] = useState<string>('');

  const parseNum = (v: string): number => {
    if (typeof v === 'string') v = v.replace(/[\,\s$%]/g, '');
    const n = parseFloat(v);
    return Number.isFinite(n) ? n : 0;
  };

  const fmtMoney = (n: number): string => {
    try { return n.toLocaleString('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}); }
    catch(e){ return `$${Math.round(n)}`; }
  };

  const fmtPct = (n: number): string => `${(n*100).toFixed(1)}%`;

  const calculate = () => {
    const spendNum = parseNum(spend);
    const revNum = parseNum(revenue);
    const cogsPct = Math.min(100, Math.max(0, parseNum(cogs)));

    const roasValue = spendNum > 0 ? revNum / spendNum : 0;
    const cogsAmount = revNum * (cogsPct/100);
    const profitAmount = revNum - spendNum - cogsAmount;
    const marginValue = revNum > 0 ? profitAmount / revNum : 0;
    const grossMargin = revNum > 0 ? (revNum - cogsAmount)/revNum : 0;
    const beRoasValue = grossMargin > 0 ? 1 / grossMargin : 1;

    setRoas(roasValue ? `${roasValue.toFixed(2)}×` : '—');
    setProfit((revNum || spendNum) ? fmtMoney(profitAmount) : '—');
    setMargin(revNum ? fmtPct(marginValue) : '—');
    setBreakEven(beRoasValue ? `${beRoasValue.toFixed(2)}×` : '—');

    setStatus('');
    if (spendNum === 0 && revNum === 0) return;
    if (roasValue >= beRoasValue) {
      setStatus('ok');
    } else {
      setStatus('warn');
    }
  };

  const reset = () => {
    setSpend('');
    setRevenue('');
    setCogs('');
    setRoas('—');
    setBreakEven('—');
    setProfit('—');
    setMargin('—');
    setStatus('');
  };

  useEffect(() => {
    calculate();
  }, [spend, revenue, cogs]);

  return (
    <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg p-6 border border-purple-200">
      <div className="mb-4">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-xs font-bold uppercase tracking-wide">
          ROAS Calculator
        </span>
        <h3 className="text-xl font-bold text-purple-900 mt-2">Crack the ROAS Formula</h3>
      </div>

      <div className="space-y-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ad Spend ($)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={spend}
            onChange={(e) => setSpend(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="1000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Revenue ($)
          </label>
          <input
            type="number"
            min="0"
            step="0.01"
            value={revenue}
            onChange={(e) => setRevenue(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="3500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            COGS % (optional)
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={cogs}
              onChange={(e) => setCogs(e.target.value)}
              className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="30"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="text-sm text-gray-600">ROAS</div>
          <div className="text-lg font-bold text-purple-900">{roas}</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="text-sm text-gray-600">Break-Even ROAS</div>
          <div className="text-lg font-bold text-purple-900">{breakEven}</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="text-sm text-gray-600">Profit</div>
          <div className="text-lg font-bold text-purple-900">{profit}</div>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
          <div className="text-sm text-gray-600">Profit Margin</div>
          <div className="text-lg font-bold text-purple-900">{margin}</div>
        </div>
      </div>

      {status && (
        <div className={`mb-4 p-3 rounded-lg text-sm ${
          status === 'ok'
            ? 'bg-green-50 border border-green-200 text-green-800'
            : 'bg-orange-50 border border-orange-200 text-orange-800'
        }`}>
          {status === 'ok'
            ? 'Above break-even — scale with confidence'
            : 'Below break-even — optimize or cut spend'}
        </div>
      )}

      <div className="flex gap-2 mb-4">
        <button
          onClick={calculate}
          className="flex-1 bg-gradient-to-r from-purple-600 to-purple-800 text-white py-2 px-4 rounded-lg font-bold hover:from-purple-700 hover:to-purple-900 transition-colors"
        >
          Calculate
        </button>
        <button
          onClick={reset}
          className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-bold hover:bg-gray-200 transition-colors"
        >
          Reset
        </button>
      </div>

      <p className="text-xs text-gray-500 text-center">
        Estimates only. For US currency formatting; exclude taxes/shipping unless included in revenue.
      </p>
    </div>
  );
};

export default ROASCalculator;

