const questions = [
  {
    question:
      "Which of the following is a key mediator of Type I hypersensitivity reactions?",
    options: ["A. IgG", "B. IgM", "C. IgE", "D. T cells"],
    answer: "C. IgE",
    justification:
      "Type I hypersensitivity is mediated by IgE, which binds to mast cells and basophils, causing histamine release upon allergen exposure.",
  },
  {
    question: "What is the primary treatment for anaphylaxis?",
    options: [
      "A. Antihistamines",
      "B. Corticosteroids",
      "C. Adrenaline",
      "D. Leukotriene receptor antagonists",
    ],
    answer: "C. Adrenaline",
    justification:
      "Adrenaline quickly reverses life-threatening symptoms like airway obstruction, hypotension, and shock.",
  },
  {
    question:
      "Which hypersensitivity type is associated with immune complex deposition?",
    options: ["A. Type I", "B. Type II", "C. Type III", "D. Type IV"],
    answer: "C. Type III",
    justification:
      "Immune complex deposition in tissues is a hallmark of Type III hypersensitivity.",
  },
  {
    question:
      "What is the mechanism of tissue damage in Type II hypersensitivity?",
    options: [
      "A. Activation of IgE",
      "B. Opsonization and ADCC",
      "C. Immune complex deposition",
      "D. T cell activation",
    ],
    answer: "B. Opsonization and ADCC",
    justification:
      "Type II hypersensitivity involves IgG/IgM-mediated phagocytosis, complement activation, or antibody-dependent cytotoxicity.",
  },
  {
    question:
      "What type of hypersensitivity reaction is involved in granuloma formation in tuberculosis?",
    options: ["A. Type I", "B. Type II", "C. Type III", "D. Type IV"],
    answer: "D. Type IV",
    justification:
      "Granuloma formation is mediated by Th1 cells and macrophages in a delayed hypersensitivity response.",
  },
  {
    question:
      "What is the gold standard diagnostic test for Type I hypersensitivity?",
    options: [
      "A. Serum IgG",
      "B. Skin prick test",
      "C. Direct Coombs test",
      "D. Mantoux test",
    ],
    answer: "B. Skin prick test",
    justification:
      "The skin prick test is cost-effective, safe, and specific for detecting allergens in Type I hypersensitivity.",
  },
  {
    question: "Which condition is an example of Type II hypersensitivity?",
    options: [
      "A. Anaphylaxis",
      "B. Serum sickness",
      "C. Hemolytic disease of the newborn",
      "D. Rheumatoid arthritis",
    ],
    answer: "C. Hemolytic disease of the newborn",
    justification:
      "Caused by maternal IgG antibodies targeting Rh antigens on fetal RBCs.",
  },
  {
    question:
      "Which cytokines are secreted by Th2 cells during Type I hypersensitivity reactions?",
    options: [
      "A. IL-2/IFN-γ",
      "B. IL-4/IL-5",
      "C. TNF-α/IL-1",
      "D. IL-17/IL-22",
    ],
    answer: "B. IL-4 and IL-5",
    justification:
      "Th2 cells produce IL-4 for IgE class switching and IL-5 for eosinophil recruitment.",
  },
  {
    question:
      "What is the primary difference between Type III and Type IV hypersensitivity reactions?",
    options: [
      "A. Immune complexes vs T cells",
      "B. Antibody-independent",
      "C. Delayed vs immediate",
      "D. Granulomas vs serum sickness",
    ],
    answer: "A. Immune complexes vs T cells",
    justification:
      "Type III involves immune complexes, while Type IV is T cell-mediated.",
  },
  {
    question:
      "Which hypersensitivity reaction is responsible for farmer's lung?",
    options: ["A. Type I", "B. Type II", "C. Type III", "D. Type IV"],
    answer: "C. Type III",
    justification:
      "Farmer's lung is caused by immune complex deposition in alveolar membranes, typical of Type III.",
  },
  {
    question:
      "Which hypersensitivity reaction involves blocking or stimulating cell surface receptors?",
    options: ["A. Type I", "B. Type II", "C. Type III", "D. Type V"],
    answer: "D. Type V",
    justification:
      "Type V hypersensitivity includes conditions like Myasthenia Gravis and Graves’ disease, mediated by receptor-targeting antibodies.",
  },
  {
    question:
      "What is the typical onset time for Type I hypersensitivity reactions?",
    options: [
      "A. 24-72 hours",
      "B. 2-8 hours",
      "C. 5-8 hours",
      "D. 2-30 minutes",
    ],
    answer: "D. 2-30 minutes",
    justification:
      "Type I hypersensitivity is immediate, with symptoms appearing within minutes.",
  },
  {
    question:
      "Which mediator released by mast cells causes smooth muscle contraction and vascular dilation?",
    options: ["A. IL-4", "B. Histamine", "C. IgE", "D. Tryptase"],
    answer: "B. Histamine",
    justification:
      "Histamine is a preformed mediator responsible for symptoms like wheezing and swelling.",
  },
  {
    question:
      "What investigation is the most specific for confirming anaphylaxis?",
    options: [
      "A. Serum tryptase",
      "B. Skin prick test",
      "C. Specific IgE",
      "D. Eosinophil count",
    ],
    answer: "A. Serum tryptase",
    justification:
      "Elevated serum tryptase is a specific marker for anaphylaxis.",
  },
  {
    question: "Which condition is associated with Goodpasture's syndrome?",
    options: ["A. Type I", "B. Type II", "C. Type III", "D. Type IV"],
    answer: "B. Type II",
    justification:
      "Goodpasture's syndrome involves antibodies targeting the basement membrane, typical of cytotoxic reactions.",
  },
  {
    question:
      "What is the primary mechanism of tissue damage in immune complex-mediated hypersensitivity?",
    options: [
      "A. Mast cells",
      "B. T cells",
      "C. Neutrophil enzymes",
      "D. Cytokines",
    ],
    answer: "C. Neutrophil enzymes",
    justification:
      "Neutrophils release lysosomal enzymes, causing tissue damage in Type III hypersensitivity.",
  },
  {
    question:
      "Which drug is used as a mast cell stabilizer in managing hypersensitivity reactions?",
    options: [
      "A. Sodium cromoglycate",
      "B. Montelukast",
      "C. Corticosteroids",
      "D. H1 receptor blockers",
    ],
    answer: "A. Sodium cromoglycate",
    justification:
      "Sodium cromoglycate prevents mast cell degranulation, reducing symptoms.",
  },
  {
    question:
      "Which condition is a clinical example of Type IV hypersensitivity?",
    options: [
      "A. Serum sickness",
      "B. Mantoux test",
      "C. Rheumatoid arthritis",
      "D. Anaphylaxis",
    ],
    answer: "B. Mantoux test",
    justification:
      "The Mantoux test is mediated by Th1 cells and macrophages in a delayed response.",
  },
];

export default questions;
