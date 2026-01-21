/**
 * CashCalculator Component
 * 
 * Design Philosophy: Modern Minimalis dengan Aksen Hijau
 * - Kesederhanaan ekstrem: hanya elemen yang fungsional
 * - Spacing yang luas untuk clarity
 * - Hierarchy yang jelas melalui ukuran dan warna
 * - Smooth transitions untuk setiap interaksi
 */

import { useState, useMemo } from 'react';
import { Minus, Plus } from 'lucide-react';

interface CashRow {
  denomination: number;
  quantity: number;
}

const DENOMINATIONS = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200];

export default function CashCalculator() {
  const [rows, setRows] = useState<CashRow[]>(
    DENOMINATIONS.map(denom => ({ denomination: denom, quantity: 0 }))
  );

  // Calculate total for each row and grand total
  const calculations = useMemo(() => {
    const rowTotals = rows.map(row => row.denomination * row.quantity);
    const grandTotal = rowTotals.reduce((sum, total) => sum + total, 0);
    return { rowTotals, grandTotal };
  }, [rows]);

  const handleQuantityChange = (index: number, value: number) => {
    const newRows = [...rows];
    newRows[index].quantity = Math.max(0, value);
    setRows(newRows);
  };

  const handleIncrement = (index: number) => {
    handleQuantityChange(index, rows[index].quantity + 1);
  };

  const handleDecrement = (index: number) => {
    handleQuantityChange(index, Math.max(0, rows[index].quantity - 1));
  };

  const handleReset = () => {
    setRows(rows.map(row => ({ ...row, quantity: 0 })));
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'Geist Sans' }}>
            Kalkulator Kas
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Hitung total nilai uang dari berbagai denominasi Rupiah
          </p>
        </div>

        {/* Calculator Table */}
        <div className="bg-card rounded-lg shadow-sm border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Table Header */}
              <thead>
                <tr className="bg-primary/10 border-b border-border">
                  <th className="px-4 py-4 text-left text-sm font-semibold text-foreground" style={{ fontFamily: 'Geist Sans' }}>
                    Denominasi
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground" style={{ fontFamily: 'Geist Sans' }}>
                    Kurang
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground" style={{ fontFamily: 'Geist Sans' }}>
                    Jumlah
                  </th>
                  <th className="px-4 py-4 text-center text-sm font-semibold text-foreground" style={{ fontFamily: 'Geist Sans' }}>
                    Tambah
                  </th>
                  <th className="px-4 py-4 text-right text-sm font-semibold text-foreground" style={{ fontFamily: 'Geist Sans' }}>
                    Total
                  </th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody>
                {rows.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-accent/30 transition-colors duration-200"
                  >
                    {/* Denomination */}
                    <td className="px-4 py-4 text-sm sm:text-base font-medium text-foreground" style={{ fontFamily: 'Inter' }}>
                      {formatCurrency(row.denomination)}
                    </td>

                    {/* Minus Button */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handleDecrement(index)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-secondary/50 hover:bg-secondary text-secondary-foreground transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Kurangi"
                      >
                        <Minus size={16} />
                      </button>
                    </td>

                    {/* Quantity Input */}
                    <td className="px-4 py-4 text-center">
                      <input
                        type="number"
                        value={row.quantity}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 0)}
                        className="w-16 sm:w-20 px-2 py-2 text-center text-sm sm:text-base font-medium border border-border rounded-md bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-200"
                        style={{ fontFamily: 'IBM Plex Mono' }}
                        min="0"
                      />
                    </td>

                    {/* Plus Button */}
                    <td className="px-4 py-4 text-center">
                      <button
                        onClick={() => handleIncrement(index)}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/20 hover:bg-primary/30 text-primary transition-all duration-200 hover:scale-105 active:scale-95"
                        aria-label="Tambah"
                      >
                        <Plus size={16} />
                      </button>
                    </td>

                    {/* Row Total */}
                    <td className="px-4 py-4 text-right text-sm sm:text-base font-semibold text-foreground" style={{ fontFamily: 'IBM Plex Mono' }}>
                      <span className="inline-block transition-all duration-300">
                        {calculations.rowTotals[index] > 0 ? formatCurrency(calculations.rowTotals[index]) : '-'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>

              {/* Total Row */}
              <tfoot>
                <tr className="bg-primary/15 border-t-2 border-primary/30">
                  <td colSpan={4} className="px-4 py-4 text-right text-sm sm:text-base font-semibold text-foreground" style={{ fontFamily: 'Geist Sans' }}>
                    Total Kas
                  </td>
                  <td className="px-4 py-4 text-right">
                    <span
                      className="inline-block text-lg sm:text-xl font-bold text-primary transition-all duration-300"
                      style={{ fontFamily: 'IBM Plex Mono' }}
                    >
                      {formatCurrency(calculations.grandTotal)}
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3 justify-end">
          <button
            onClick={handleReset}
            className="px-4 py-2 text-sm font-medium text-foreground bg-secondary/50 hover:bg-secondary rounded-md transition-all duration-200 hover:scale-105 active:scale-95"
            style={{ fontFamily: 'Inter' }}
          >
            Reset
          </button>
        </div>

        {/* Info Footer */}
        <div className="mt-8 p-4 bg-accent/20 rounded-lg border border-accent/30">
          <p className="text-xs sm:text-sm text-muted-foreground" style={{ fontFamily: 'Inter' }}>
            💡 Gunakan tombol +/- untuk menambah atau mengurangi jumlah, atau ketik langsung di kolom jumlah. Total akan dihitung secara otomatis.
          </p>
        </div>
      </div>
    </div>
  );
}
