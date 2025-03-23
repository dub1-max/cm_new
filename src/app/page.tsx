"use client"

import { useState } from 'react';
import { ArrowRight, Wifi, Monitor, Users, Coffee, Clock, Projector, Lock, UtensilsCrossed, Car, Phone, Mail, MapPin } from 'lucide-react';
import { CardsCarousel } from "./carousel"
import { TestimonialMain } from './testimonial';
import { Pin } from './pin';
function App() {
  const [selectedSpace, setSelectedSpace] = useState('OPEN SPACE');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-8">
        <nav className="flex items-center justify-between mb-16">
          <div className="text-2xl font-bold flex items-center gap-1">
            <span className="text-green-500">Connecting</span>Minds
          </div>
          <a href="#support" className="bg-green-500 text-white px-6 py-2 rounded-full flex items-center">
            EXPLORE
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </nav>

        <div className="text-left mb-12">
          <p className="text-sm uppercase tracking-wider text-gray-600 mb-2">BUILT FOR GROWTH.</p>
          <h1 className="text-5xl font-bold mb-2">
            Your Space to <span className="text-green-500">Innovate</span>
            <br />and Collaborate.
          </h1>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800"
            alt="Coworking space"
            className="w-full h-80 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&w=800"
            alt="People playing foosball"
            className="w-full h-80 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800"
            alt="Team collaboration"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Features Section */}
        <section className="mb-20">
          <div className="text-left mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-600">SOME OF OUR FEATURES</h3>
            <div className="flex justify-between items-start">
              <h2 className="text-3xl font-bold mt-2">
                The <span className="text-green-500">benefits</span> that will
                <br />make you comfort.
              </h2>
              <p className="mt-2 text-gray-600 max-w-md text-right">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
            {[
              { icon: <Wifi className="w-8 h-8" />, label: 'Free 5G WiFi' },
              { icon: <Monitor className="w-8 h-8" />, label: 'Office Equipment' },
              { icon: <Users className="w-8 h-8" />, label: 'Conference Hall' },
              { icon: <Coffee className="w-8 h-8" />, label: 'Meeting Rooms' },
              { icon: <Clock className="w-8 h-8" />, label: 'Game Zone' },
              { icon: <Projector className="w-8 h-8" />, label: '24/7 Access' },
              { icon: <Lock className="w-8 h-8" />, label: 'Personal Lockers' },
              { icon: <UtensilsCrossed className="w-8 h-8" />, label: 'Kitchen & Bar' },
              { icon: <Car className="w-8 h-8" />, label: 'Car Parking' },
            ].map((feature, index) => (
              <div key={index} className="text-center group cursor-pointer hover:scale-105 transition-transform">
                <div className="text-green-500 flex justify-center mb-3 bg-green-50 p-4 rounded-lg group-hover:bg-green-100 transition-colors">
                  {feature.icon}
                </div>
                <p className="font-medium text-sm">{feature.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
                alt="Office collaboration"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute bottom-8 left-8 grid grid-cols-2 gap-4">
                <div className="bg-green-600 text-white p-6 rounded-lg">
                  <h3 className="text-4xl font-bold">300+</h3>
                  <p className="text-sm">SEATS AVAILABLE</p>
                </div>
                <div className="bg-gray-900 text-white p-6 rounded-lg">
                  <h3 className="text-4xl font-bold">10+</h3>
                  <p className="text-sm">MEETING ROOMS</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-4">WHO WE ARE</h3>
              <h2 className="text-3xl font-bold mb-4">
                Where Ideas Flourish and
                <br /><span className="text-green-500">Connections</span> Thrive
              </h2>
              <p className="text-gray-600 mb-8">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                voluptatum deleniti atque.
              </p>
              <div className="space-y-6">
                {[
                  { icon: <Monitor className="w-5 h-5" />, label: 'Dedicated Desks' },
                  { icon: <Coffee className="w-5 h-5" />, label: 'Onsite Café & Lounge' },
                  { icon: <Car className="w-5 h-5" />, label: 'Parking Area' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="text-green-500 bg-green-50 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <p className="font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
              <button className="inline-flex items-center text-green-500 font-medium mt-8 hover:gap-4 transition-all gap-2">
                LEARN MORE
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
        {
          // Carousel
        }

        <CardsCarousel />
        {/* Workspace Section */}
        <section className="mb-20 bg-gray-50 py-16 px-8 rounded-lg">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-600">SPACES THAT WORK FOR YOU</h3>
            <h2 className="text-3xl font-bold mt-2">
              Your Hub for <span className="text-green-500">Productivity</span> and
              <br />Creativity
            </h2>
          </div>

          <div className="grid grid-cols-4 gap-8 mb-16">
            {[
              'OPEN SPACE',
              'PRIVATE OFFICE',
              'CONFERENCE HALL',
              'GAME ZONE'
            ].map((space) => (
              <button
                key={space}
                onClick={() => setSelectedSpace(space)}
                className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedSpace === space ? 'bg-green-500 text-white' : 'hover:bg-green-50'
                  }`}
              >
                <Users className={`w-8 h-8 mb-2 ${selectedSpace === space ? 'text-white' : 'text-green-500'}`} />
                <p className="font-medium text-sm">{space}</p>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">{selectedSpace}</h3>
              <p className="text-gray-600 mb-8">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Monitor className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">Square 45 m</p>
                    <p className="text-sm text-gray-600">Measurement</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">Workplaces 2</p>
                    <p className="text-sm text-gray-600">Quantity</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Coffee className="w-6 h-6 text-green-500" />
                  <div>
                    <p className="font-medium">$ 150 / Month</p>
                    <p className="text-sm text-gray-600">Price</p>
                  </div>
                </div>
              </div>

              <button className="mt-8 bg-green-500 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-green-600 transition-colors">
                GET WORKSPACE
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800"
                alt="Open workspace"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-50 py-16 rounded-lg mb-20">
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase tracking-wider text-gray-600">TESTIMONIALS</h3>
            <h2 className="text-3xl font-bold mt-2">
              We love to <span className="text-green-500">hear</span> from our
              <br />customers
            </h2>
          </div>
          <div>
            <TestimonialMain />
          </div>
        </section>
        {/* <div>
          <Pin/>
        </div> */}

        {/* Contact Section */}
        <section id="#support" className="mb-20 grid grid-cols-2 gap-12">
          <div>
            <h3 className="text-sm uppercase tracking-wider text-gray-600 mb-4">CONNECT WITH US</h3>
            <h2 className="text-4xl font-bold mb-4">
              Have questions? <span className="text-green-500">Get</span>
              <br />in touch!
            </h2>
            <p className="text-gray-600 mb-8">
              Lorem ipsum dolor sit amet, lacus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">LOCATION</p>
                  <p className="font-medium">7 York ST, USA</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">CALL US</p>
                  <p className="font-medium">+ 111 222 333</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-600">MAIL US</p>
                  <p className="font-medium">info@example.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Your Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Select Option</label>
                <select
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                >
                  <option>Choose an option</option>
                  <option>Open Space</option>
                  <option>Private Office</option>
                  <option>Conference Hall</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help you? Feel free to get in touch!</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
                ></textarea>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="rounded border-gray-300 text-green-500 focus:ring-green-500"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree that my submitted data is collected and stored
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </section>


      </header>
    </div>
  );
}

export default App;