import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-forest text-white/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl text-white mb-4" style={{ color: '#FFFFFF' }}>Present Heart Living</h3>
            <p className="text-sm text-white/70 leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Yoga, Pilates and breathwork practices in the Scottish Highlands. 
              Mindful movement for a balanced life.
            </p>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4" style={{ color: '#FFFFFF' }}>Classes</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <li><Link href="/classes/seasonal-flow-yoga" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Seasonal Flow Yoga</Link></li>
              <li><Link href="/classes/restorative-yoga" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Restorative Yoga</Link></li>
              <li><Link href="/classes/yin-yoga" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Yin Yoga</Link></li>
              <li><Link href="/pilates-classes-highlands" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Pilates</Link></li>
              <li><Link href="/classes/breathwork" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Breathwork</Link></li>
              <li><Link href="/classes/sound-baths" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Sound Baths</Link></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4" style={{ color: '#FFFFFF' }}>Explore</h4>
            <ul className="space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <li><Link href="/about-present-heart-living" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>About</Link></li>
              <li><Link href="/about/audrey-buchanan" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Meet Audrey</Link></li>
              <li><Link href="/retreats" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Retreats</Link></li>
              <li><Link href="/corporate-wellbeing" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Corporate Wellbeing</Link></li>
              <li><Link href="/journal" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Journal</Link></li>
              <li><Link href="/contact" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-white mb-4" style={{ color: '#FFFFFF' }}>Contact</h4>
            <address className="not-italic text-sm text-white/70 space-y-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <p>9 Breac An Ord<br />Maryburgh<br />Ross Shire<br />IV7 8DH</p>
              <p>
                <a href="mailto:presentheartyoga@gmail.com" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  presentheartyoga@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:07805899207" className="text-white/70 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  07805 899207
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50" style={{ color: 'rgba(255,255,255,0.5)' }}>
            &copy; {new Date().getFullYear()} Present Heart Living. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy-policy" className="text-white/50 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="text-white/50 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Terms</Link>
            <Link href="/cookie-policy" className="text-white/50 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Cookies</Link>
            <Link href="/accessibility" className="text-white/50 hover:text-white no-underline transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
