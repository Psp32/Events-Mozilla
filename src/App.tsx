import React from 'react';
import { Calendar, Users, MapPin, Clock, ChevronRight, Github } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Web Security Workshop",
    date: "March 25, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Academic Block 1",
    description: "Learn about modern web security practices and how to protect your applications from common vulnerabilities.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    title: "Firefox Developer Tools Deep Dive",
    date: "April 2, 2025",
    time: "3:00 PM - 5:00 PM",
    location: "Lab Complex",
    description: "Master Firefox's powerful developer tools for better debugging and performance optimization.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    title: "Open Source Contributors Meetup",
    date: "April 15, 2025",
    time: "6:00 PM - 8:00 PM",
    location: "Architecture Building",
    description: "Connect with fellow contributors and learn how to participate in Mozilla's open-source projects.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&q=80&w=800"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-black text-gray-100 font-poppins">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-black">
        <nav className="absolute top-0 w-full z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-end items-center">
            <div className="flex items-center space-x-6">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#events" className="hover:text-white transition-colors">Events</a>
              <a href="#join" className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors">
                Join Club
              </a>
            </div>
          </div>
        </nav>
        
        <div className="max-w-7xl mx-auto px-6 pt-32 pb-20">
          <div className="relative z-10">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white font-cinzel">
              Mozilla Firefox
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 mb-8">
              Open Minds . Open Ideas . Open Source
            </p>
            <a 
              href="#events" 
              className="inline-flex items-center px-6 py-3 bg-white text-black rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Explore Events
              <ChevronRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* About Us Section */}
      <section id="about" className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-cinzel">About Us</h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
            <p className="mb-6">
              Mozilla Firefox Club VIT, one of the largest developers' communities in VIT BHOPAL has been working with an aspiration of changing ideas into reality ever since its inception. With a rich history as one of the top technical clubs comprising a team of over 100+ core members, 3 mentors, and 10 as the executive board, dedicated to technically strengthening the students by integrating their skills in various fields of Engineering & Technology, so as to face the highly competitive environment.
            </p>
            <p className="mb-6">
              We provide a morale boosting system for the talented youth through our professional endeavors and inspire each student at VIT and beyond to follow our academic interests and goals. We have a diverse audience from over 15 countries as a part of the students we teach.Creating value through real world impact-driven projects.
            </p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center font-cinzel">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div 
                key={event.id}
                className="bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-300">
                      <Calendar className="w-5 h-5 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <button className="mt-6 w-full py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 font-cinzel">Join Our Community</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="flex flex-col items-center p-6 bg-black rounded-xl">
              <Users className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">500+</h3>
              <p className="text-gray-400">Active Members</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black rounded-xl">
              <Calendar className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">20+</h3>
              <p className="text-gray-400">Events per Month</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-black rounded-xl">
              <Github className="w-12 h-12 text-white mb-4" />
              <h3 className="text-xl font-semibold mb-2">100+</h3>
              <p className="text-gray-400">Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-xl font-bold font-cinzel mb-6 md:mb-0">Mozilla Firefox</span>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;