"use client";

import { motion } from "framer-motion";

export type ImpactLevel = "emerging" | "scaling" | "embedded";

export interface ImpactDimension {
  label: string;
  level: ImpactLevel;
  detail: string;
}

const LEVEL_FILL: Record<ImpactLevel, number> = {
  emerging: 0.38,
  scaling: 0.68,
  embedded: 1,
};

const LEVEL_LABEL: Record<ImpactLevel, string> = {
  emerging: "EMERGING",
  scaling: "SCALING",
  embedded: "EMBEDDED",
};

interface ImpactMonitorProps {
  dimensions: ImpactDimension[];
}

export function ImpactMonitor({ dimensions }: ImpactMonitorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
      {dimensions.map((dimension, index) => (
        <motion.div
          key={dimension.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.08 }}
        >
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <span className="text-subheading">{dimension.label}</span>
            <span className="text-micro text-swiss-muted tracking-[0.15em]">
              {LEVEL_LABEL[dimension.level]}
            </span>
          </div>
          <div className="h-1.5 w-full bg-swiss-dark-gray/50 overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-swiss-white rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${LEVEL_FILL[dimension.level] * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.08 + 0.1, ease: "easeOut" }}
            />
          </div>
          <p className="text-body text-swiss-muted mt-3">{dimension.detail}</p>
        </motion.div>
      ))}
    </div>
  );
}
