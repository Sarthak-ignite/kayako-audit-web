import { repoPath } from "@/lib/paths";

export type DatasetId = "balanced";

export type DatasetConfig = {
  id: DatasetId;
  label: string;
  summaryCsvPath?: string;
  csvMetricsPath?: string; // path to poc_csv_metrics.csv
  ticketMetricsPath?: string; // path to poc_ticket_metrics.csv
  resultsDir: string;
  rawDir: string;
};

export const DATASETS: Record<DatasetId, DatasetConfig> = {
  balanced: {
    id: "balanced",
    label: "GPT-5.2 Balanced (98 tickets)",
    summaryCsvPath: repoPath("data/poc/poc_llm_balanced_summary.csv"),
    csvMetricsPath: repoPath("data/poc/poc_csv_metrics.csv"),
    ticketMetricsPath: repoPath("data/poc/poc_ticket_metrics.csv"),
    resultsDir: repoPath("data/poc/llm_results/balanced-test"),
    rawDir: repoPath("data/poc/raw"),
  },
};

export function getDataset(id: string | null | undefined): DatasetConfig {
  const key = (id || "balanced") as DatasetId;
  return DATASETS[key] || DATASETS.balanced;
}


