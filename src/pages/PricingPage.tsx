import React, { useState } from 'react';
import BillingToggle from '../components/BillingToggle';
import PricingCard from '../components/PricingCard';

const planDetails = {
  basic: {
    title: "Basic",
    description: "For small teams and individual educators getting started.",
    features: [
      "Core Google Workspace apps",
      "100 participant video meetings",
      "30 GB cloud storage per user",
      "Standard security and management",
      "Community support"
    ]
  },
  pro: {
    title: "Pro",
    description: "For growing institutions that need more collaboration and control.",
    features: [
      "Everything in Basic, plus:",
      "250 participant video meetings + recording",
      "2 TB pooled storage per user",
      "Enhanced security and analytics",
      "Originality reports",
      "24/7 online support"
    ]
  },
  enterprise: {
    title: "Enterprise",
    description: "For large organizations requiring advanced security and compliance.",
    features: [
      "Everything in Pro, plus:",
      "500 participant video meetings + live streaming",
      "5 TB pooled storage per user",
      "Advanced security, compliance, and data controls",
      "AppSheet Core included",
      "Dedicated technical advisor"
    ]
  }
};

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'basic' as keyof typeof planDetails,
      monthlyPrice: 8,
      yearlyPrice: 77, // ~20% off
      isPopular: false,
    },
    {
      name: 'pro' as keyof typeof planDetails,
      monthlyPrice: 15,
      yearlyPrice: 144,
      isPopular: true,
    },
    {
      name: 'enterprise' as keyof typeof planDetails,
      monthlyPrice: null, // Contact sales
      yearlyPrice: null,
      isPopular: false,
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Flexible Plans for Every Institution
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
          Choose the plan that best fits your needs. Get 2 months free with annual billing.
        </p>
        <BillingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <PricingCard
            key={plan.name}
            name={planDetails[plan.name].title}
            description={planDetails[plan.name].description}
            price={isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            billingCycle={isYearly ? 'user/year' : 'user/month'}
            features={planDetails[plan.name].features}
            isPopular={plan.isPopular}
            buttonText={plan.name === 'enterprise' ? 'Contact Sales' : 'Get Started'}
            isEnterprise={plan.name === 'enterprise'}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
