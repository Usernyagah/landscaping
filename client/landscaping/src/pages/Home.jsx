// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Kenyan Landscape */}
      <section className="relative h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560707303-4e980ce876ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" 
            alt="Kenyan landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Welcome to LandsaFix
            </h1>
            <p className="text-xl mb-8 max-w-lg">
              Connect with professional landscapers in Kenya and<br />
              transform your outdoor spaces into breathtaking<br />
              environments.
            </p>
            <Link to="/explore">
              <Button className="bg-emerald-600 hover:bg-emerald-700 px-8 py-6 text-lg">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">Our Professional Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Premium landscaping solutions tailored for Kenyan homes and businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-50 transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Garden Design" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Garden Design & Installation</h3>
                <p className="text-gray-600 mb-4">
                  Custom garden designs that complement Kenyan architecture and climate
                </p>
                <Button variant="outline" className="border-emerald-600 text-emerald-800">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-50 transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                  alt="Lawn Maintenance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Lawn Maintenance</h3>
                <p className="text-gray-600 mb-4">
                  Year-round care to keep your lawn lush and healthy in Kenya's climate
                </p>
                <Button variant="outline" className="border-emerald-600 text-emerald-800">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-emerald-50 transition-all hover:shadow-xl">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" 
                  alt="Irrigation Systems" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">Irrigation Systems</h3>
                <p className="text-gray-600 mb-4">
                  Water-efficient solutions designed for Kenyan weather patterns
                </p>
                <Button variant="outline" className="border-emerald-600 text-emerald-800">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-emerald-800 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from satisfied customers across Kenya who have transformed their outdoor spaces
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  SK
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-emerald-800">Samuel Kariuki</h4>
                  <p className="text-emerald-600">Nairobi</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "LandsaFix transformed my backyard into a paradise. Their team understood exactly what I wanted and delivered beyond my expectations. The Kenyan plants they recommended are thriving beautifully!"
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  AH
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-emerald-800">Amina Hassan</h4>
                  <p className="text-emerald-600">Mombasa</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Professional service from start to finish. They created a stunning coastal garden that withstands the humidity and salt air. I get compliments from all my neighbors!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-emerald-100">
            Join thousands of Kenyans who have created beautiful, sustainable outdoor environments with LandsaFix
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/register">
              <Button className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-lg">
                Get a Free Consultation
              </Button>
            </Link>
            <Link to="/explore">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Explore Our Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-emerald-600 w-8 h-8 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">LF</span>
                </div>
                <h3 className="text-xl font-bold">LandsaFix</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Professional landscape solutions tailored for Kenya's unique environment
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Instagram</span>
                  <i className="fab fa-instagram text-xl"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Garden Design</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Lawn Maintenance</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Irrigation Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Tree Planting</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Landscape Lighting</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Locations</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Nairobi</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mombasa</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Kisumu</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Nakuru</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Eldoret</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <address className="not-italic text-gray-400">
                <p className="mb-2">Green Towers, 3rd Floor</p>
                <p className="mb-2">Westlands, Nairobi</p>
                <p className="mb-2">Kenya</p>
                <p className="mb-2">Phone: +254 700 123 456</p>
                <p>Email: info@landsafix.co.ke</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} LandsaFix Kenya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;