/* components/products/ProductAccordion.tsx */
"use client";
import { useState } from "react";
import { Button } from "../ui/button";

type ProductAccordionProps = {
  nutritionContent: React.ReactNode;
};

const ProductAccordion = ({ nutritionContent }: ProductAccordionProps) => {
  const [overviewOpen, setOverviewOpen] = useState(true);
  const [nutritionOpen, setNutritionOpen] = useState(true);

  return (
    <div className="mt-10">
      {/* ===================== Overview ===================== */}
      <div
        className="overflow-hidden rounded-2xl"
        style={{ backgroundColor: "#F2F3F7" }}
      >
        <Button
          type="button"
          variant="ghost"
          onClick={() => setOverviewOpen((open) => !open)}
          className="h-auto w-full justify-between rounded-none bg-transparent px-5 py-4"
        >
          <span
            className="text-primary"
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "22px",
              letterSpacing: "-0.41px",
            }}
          >
            Overview
          </span>

          <svg
            className={`h-5 w-5 text-gray-500 transition-transform ${
              overviewOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </div>

      {overviewOpen && (
        <div
          className="space-y-4 pb-5 pt-5 text-primary"
          style={{
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "150%",
            letterSpacing: "0%",
          }}
        >
          <p>
            The perfect blend of Robusta and Arabica beans, delivering a rich
            yet smooth end-cup experience. Perfectly roasted for your morning
            rituals.
          </p>

          <p>
            Sourced from premium coffee farms and carefully selected for balance
            and depth, this blend offers a bold aroma with subtle chocolate and
            nutty undertones. Each sip reveals a full-bodied flavor, low
            acidity, and a velvety finish—crafted for those who appreciate a
            comforting, everyday brew that feels indulgent.
          </p>

          <p>
            Expert roasting techniques ensure the beans retain their natural
            oils and character, creating a coffee that pairs beautifully with
            milk, plant-based alternatives, or enjoyed black. Ideal for
            espresso, drip, or French press methods, it adapts effortlessly to
            your preferred brewing style.
          </p>

          <div className="space-y-1 pt-1">
            <p>
              <span className="font-medium">Origin:</span> Spain
            </p>

            <p>
              <span className="font-medium">Shelf Life:</span> 24 months
            </p>
          </div>
        </div>
      )}

      {/* ===================== Nutrition Facts ===================== */}
      <div
        className="mt-4 overflow-hidden rounded-2xl"
        style={{ backgroundColor: "#F2F3F7" }}
      >
        <Button
          type="button"
          variant="ghost"
          onClick={() => setNutritionOpen((open) => !open)}
          className="h-auto w-full justify-between rounded-none bg-transparent px-5 py-4"
        >
          <span
            className="text-primary"
            style={{
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "22px",
              letterSpacing: "-0.41px",
            }}
          >
            Nutrition Facts
          </span>

          <svg
            className={`h-5 w-5 text-gray-500 transition-transform ${
              nutritionOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </div>

      {nutritionOpen && (
        <div
          className="pb-5 pt-5 text-primary"
          style={{
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "150%",
            letterSpacing: "0%",
            wordSpacing: "1px",
          }}
        >
          {nutritionContent}
        </div>
      )}
    </div>
  );
};

export default ProductAccordion;
