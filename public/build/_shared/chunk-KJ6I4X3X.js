// app/style/scss/custom/custom.css
var custom_default = "/build/_assets/custom-4ILZQQH5.css";

// app/data/ad-results.ts
var formatPct = (value) => `${value.toFixed(2)}%`;
function getOpenRate(stats) {
  if (typeof stats.openRate === "number")
    return formatPct(stats.openRate);
  return stats.sent > 0 ? formatPct(stats.opens / stats.sent * 100) : "0.00%";
}
function getCtr(stats) {
  if (typeof stats.ctr === "number")
    return formatPct(stats.ctr);
  return stats.sent > 0 ? formatPct(stats.uniqueClicks / stats.sent * 100) : "0.00%";
}
var runKey = (run) => {
  var _a;
  return (_a = run.id) != null ? _a : run.date;
};

export {
  custom_default,
  getOpenRate,
  getCtr,
  runKey
};
//# sourceMappingURL=/build/_shared/chunk-KJ6I4X3X.js.map
