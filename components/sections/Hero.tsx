import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connect, Collaborate, 
            <span className="block text-yellow-300">Innovate</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Assemble is the platform that revolutionizes how we work together. 
            Organize projects, manage teams and achieve extraordinary results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="primary" 
              size="large"
              onClick={() => console.log('Get started now')}
            >
              Get Started Now
            </Button>
            <Button 
              variant="secondary" 
              size="large"
              onClick={() => console.log('View demo')}
            >
              View Demo
            </Button>
          </div>
        </div>
        
        {/* Hero Image/Illustration */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-96 h-64 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-blue-100">Platform illustration</p>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 