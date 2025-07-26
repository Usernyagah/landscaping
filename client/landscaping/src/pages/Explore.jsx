import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Explore = () => {
  
  const services = [
    {
      id: 1,
      title: "Garden Design & Installation",
      description: "Custom garden designs tailored to Kenyan landscapes with native plants and efficient layouts",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      price: "From KES 15,000",
      duration: "2-4 weeks"
    },
    {
      id: 2,
      title: "Lawn Maintenance",
      description: "Regular care including mowing, fertilizing, and pest control for healthy Kenyan lawns",
      image: "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      price: "KES 5,000/month",
      duration: "Ongoing"
    },
    {
      id: 3,
      title: "Irrigation Systems",
      description: "Water-efficient irrigation solutions designed for Kenya's climate patterns",
      image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      price: "From KES 25,000",
      duration: "1-2 weeks"
    },
    {
      id: 4,
      title: "Tree Planting",
      description: "Selection and planting of native Kenyan trees for shade and environmental benefits",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      price: "KES 3,000 per tree",
      duration: "1-3 days"
    },
    {
      id: 5,
      title: "Landscape Lighting",
      description: "Energy-efficient outdoor lighting solutions for Kenyan homes and businesses",
      image: "https://images.unsplash.com/photo-1615412704911-55d589229864?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1282&q=80",
      price: "From KES 18,000",
      duration: "3-5 days"
    },
    {
      id: 6,
      title: "Paving & Hardscaping",
      description: "Durable stone and concrete installations for Kenyan outdoor living spaces",
      image: "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      price: "From KES 8,000/m²",
      duration: "1-3 weeks"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Explore Landscaping Services</h1>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-emerald-100">
            Discover professional landscaping solutions tailored for Kenyan homes and businesses
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="overflow-hidden transition-all hover:shadow-xl hover:border-emerald-300">
                <div className="h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-emerald-800">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-gray-500">
                    <div>
                      <span className="font-semibold">Price:</span> {service.price}
                    </div>
                    <div>
                      <span className="font-semibold">Duration:</span> {service.duration}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" className="border-emerald-600 text-emerald-800">
                    Learn More
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    Book Service
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Landscapers */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-emerald-800 mb-12 text-center">Featured Landscapers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((id) => (
              <Card key={id} className="text-center">
                <CardHeader>
                  <div className="flex justify-center">
                    <div className="bg-emerald-600 w-20 h-20 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {id === 1 ? 'SK' : id === 2 ? 'AM' : id === 3 ? 'JK' : 'NM'}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-emerald-800">
                    {id === 1 ? 'Samuel Kariuki' : id === 2 ? 'Amina Mwangi' : id === 3 ? 'James Kamau' : 'Naomi Mumbi'}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {id === 1 ? '10+ years experience' : id === 2 ? 'Native plant specialist' : id === 3 ? 'Irrigation expert' : 'Sustainable design'}
                  </CardDescription>
                  <div className="flex justify-center mt-4">
                    <div className="flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" className="border-emerald-600 text-emerald-800">
                    View Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-emerald-700 to-emerald-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-emerald-100">
            Contact us directly for custom landscaping solutions tailored to your specific needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-white text-emerald-800 hover:bg-emerald-50 px-8 py-6 text-lg">
              Request Custom Service
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Explore;
