import React, { useState } from 'react';
import { Check, Star, Zap, Crown, Users, DollarSign, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for new writers getting started",
      price: { monthly: 0, annual: 0 },
      icon: Users,
      color: "from-gray-500 to-gray-600",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
      popular: false,
      features: [
        "Up to 5 published articles",
        "Basic themes",
        "Community support",
        "Basic analytics",
        "Mobile app access",
        "Email support"
      ],
      limitations: [
        "Limited customization",
        "Basic SEO tools",
        "No monetization"
      ]
    },
    {
      name: "Creator",
      description: "For serious writers building their audience",
      price: { monthly: 19, annual: 190 },
      icon: Zap,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      popular: true,
      features: [
        "Unlimited articles",
        "Premium themes",
        "Custom domain",
        "Advanced analytics",
        "Monetization tools",
        "Priority support",
        "Newsletter builder",
        "Social media integration",
        "SEO optimization",
        "Custom branding"
      ],
      limitations: []
    },
    {
      name: "Pro",
      description: "For professional writers and small teams",
      price: { monthly: 49, annual: 490 },
      icon: Crown,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      popular: false,
      features: [
        "Everything in Creator",
        "Team collaboration",
        "Advanced monetization",
        "API access",
        "White-label options",
        "Dedicated support",
        "Custom integrations",
        "Advanced analytics",
        "A/B testing",
        "Priority features"
      ],
      limitations: []
    }
  ];

  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences."
    },
    {
      question: "What happens to my content if I cancel?",
      answer: "Your content remains accessible for 30 days after cancellation. You can export all your content during this period."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied, we'll refund your payment."
    },
    {
      question: "Can I try before I buy?",
      answer: "Absolutely! Start with our free plan and upgrade when you're ready. No credit card required to get started."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-neutral-50 via-white to-orange-50/30 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Simple, transparent
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                pricing
              </span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Choose the perfect plan for your writing journey. Start free, upgrade when you're ready.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg font-medium ${!isAnnual ? 'text-neutral-900' : 'text-neutral-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={`relative w-16 h-8 rounded-full transition-colors ${
                  isAnnual ? 'bg-orange-500' : 'bg-neutral-300'
                }`}
              >
                <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-8' : 'translate-x-0'
                }`}></div>
              </button>
              <span className={`text-lg font-medium ${isAnnual ? 'text-neutral-900' : 'text-neutral-500'}`}>
                Annual
              </span>
              {isAnnual && (
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  Save 20%
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            const price = isAnnual ? plan.price.annual : plan.price.monthly;
            const monthlyPrice = isAnnual ? Math.round(plan.price.annual / 12) : plan.price.monthly;

            return (
              <div
                key={index}
                className={`relative bg-white rounded-3xl p-8 border-2 ${
                  plan.popular ? 'border-orange-300 shadow-2xl scale-105' : plan.borderColor
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${plan.bgColor} rounded-2xl mb-4`}>
                    <IconComponent className={`w-8 h-8 ${plan.color.replace('from-', 'text-').replace(' to-', '-')}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">{plan.name}</h3>
                  <p className="text-neutral-600 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-neutral-900">${price}</span>
                      {price > 0 && (
                        <span className="text-neutral-500 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    {isAnnual && price > 0 && (
                      <p className="text-sm text-neutral-500 mt-2">
                        ${monthlyPrice}/month when billed annually
                      </p>
                    )}
                  </div>

                  <button
                    className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl'
                        : plan.name === 'Starter'
                        ? 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
                        : 'bg-neutral-900 hover:bg-neutral-800 text-white'
                    }`}
                  >
                    {plan.name === 'Starter' ? 'Get Started Free' : 'Choose Plan'}
                  </button>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-neutral-900 mb-4">What's included:</h4>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {plan.limitations.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <h4 className="font-semibold text-neutral-900 mb-4">Limitations:</h4>
                    {plan.limitations.map((limitation, limitationIndex) => (
                      <div key={limitationIndex} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-neutral-200 flex-shrink-0"></div>
                        <span className="text-neutral-500 text-sm">{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-neutral-50 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-neutral-600">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-neutral-900 mb-4">{faq.question}</h3>
                <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to start writing?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of writers who are already building their audience on ThinkSpace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-50 transition-colors shadow-lg hover:shadow-xl">
              Get Started Free
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;