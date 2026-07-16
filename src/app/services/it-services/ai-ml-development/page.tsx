import React from 'react';
import { ServiceHero } from '../../../../components/services/ServiceHero';
import { ServiceCard } from '../../../../components/services/ServiceCard';
import { ProcessSteps } from '../../../../components/services/ProcessSteps';
import { TechStack } from '../../../../components/services/TechStack';
import { ServiceCTA } from '../../../../components/services/ServiceCTA';

export const metadata = {
  title: "AI/ML Development Services India | Codevate Group",
};

export default function AIMLDevelopmentPage() {
  const cards = [
    {
      icon: "cpu",
      title: "Custom ML Model Development",
      description: "Build, train, and deploy machine learning models tailored to your data and objectives."
    },
    {
      icon: "file-text",
      title: "Natural Language Processing (NLP)",
      description: "Text classification, sentiment analysis, entity extraction, and language understanding systems."
    },
    {
      icon: "smartphone",
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational agents integrated into your website, app, or WhatsApp."
    },
    {
      icon: "search",
      title: "Computer Vision",
      description: "Image recognition, object detection, OCR, and visual inspection systems."
    },
    {
      icon: "layout",
      title: "Recommendation Engines",
      description: "Personalisation systems for e-commerce, content, and product discovery."
    },
    {
      icon: "git-branch",
      title: "Predictive Analytics",
      description: "Forecasting models for demand, churn, pricing, and business KPIs."
    },
    {
      icon: "database",
      title: "LLM Integration & RAG Systems",
      description: "Integrate GPT, Claude, or Gemini into your products with custom retrieval-augmented generation."
    },
    {
      icon: "cloud",
      title: "Data Pipeline & MLOps",
      description: "End-to-end ML infrastructure: data ingestion, feature engineering, model deployment, and monitoring."
    }
  ];

  const steps = [
    { number: 1, title: "Problem Definition", description: "Define the business problem, success metrics, and data requirements" },
    { number: 2, title: "Data Assessment", description: "Audit available data, identify gaps, define collection strategy" },
    { number: 3, title: "Exploratory Analysis", description: "EDA, feature analysis, and baseline model benchmarking" },
    { number: 4, title: "Model Development", description: "Train, validate, and iterate on candidate models" },
    { number: 5, title: "Evaluation", description: "Precision, recall, accuracy, and business-metric validation" },
    { number: 6, title: "Deployment", description: "API-wrapped model deployment with monitoring" },
    { number: 7, title: "Feedback Loop", description: "Ongoing model retraining and performance tracking" }
  ];

  return (
    <main className="bg-white">
      <ServiceHero 
        label="AI / ML DEVELOPMENT"
        title="Intelligent Systems. Real Business Impact."
        highlight="Real Business Impact"
        description="Codevate's AI/ML team builds custom intelligent systems — from NLP chatbots and recommendation engines to computer vision and predictive analytics — that solve real problems for Indian businesses."
      />
      
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B2B5E] text-center mb-16">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cards.map((card, idx) => (
              <ServiceCard key={idx} {...card} />
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} />
      
      <TechStack label="Tools We Use" items={["Python", "TensorFlow", "PyTorch", "scikit-learn", "OpenAI API", "Anthropic API", "LangChain", "Hugging Face", "FastAPI", "AWS SageMaker", "Google Vertex AI", "PostgreSQL", "Pinecone", "Redis"]} />
      
      <ServiceCTA 
        heading="Ready to Leverage AI for Your Business?"
        sub="Let's discuss how machine learning can automate processes and drive growth."
        buttonText="Build Your AI Solution"
        buttonHref="/contact"
      />
    </main>
  );
}
