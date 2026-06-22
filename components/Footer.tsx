'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiMail } from 'react-icons/fi';
import { FaInstagram, FaSnapchat, FaTiktok, FaWhatsapp } from 'react-icons/fa6';

const SOCIALS = [
  { name: 'Snapchat', link: 'https://snapchat.com/t/ZUch8xYy' , handle: 'ZUch8xYy' },
  { name: 'TikTok', link: 'https://www.tiktok.com/@airalabel', handle: '@airalabel' },
  { name: 'Instagram', link: 'https://www.instagram.com/airalabel', handle: '@airalabel' },
  { name: 'WhatsApp', link: 'https://wa.me/+233206742769', handle: '+233 206 742 769' },
  { name: 'Email', link: 'mailto:info@airalabel.com', handle: 'info@airalabel.com' },
];

export default function Footer() {
  return (
    <footer className="text-gray-900 mt-16 mb-4 mx-4">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-pink-50 to-white border border-pink-200">
        <div className="px-6 py-10">
          <div className="max-w-3xl mx-auto space-y-5 text-center">
            <Link href="/" className="flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="Airalabel Logo" 
                width={70} 
                height={70}
                className="rounded-lg"
              />
            </Link>
            <p className="text-gray-700 text-sm md:text-base">
              Discover trendy girls clothing and fashion essentials at Airalabel. Shop stylish dresses, tops, and outfits for every occasion.
            </p>
            <div className="flex justify-center gap-4 pt-1">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center transition-colors"
                >
                  {social.name === 'Snapchat' ? (
                    <FaSnapchat className="text-xl" />
                  ) : social.name === 'TikTok' ? (
                    <FaTiktok className="text-xl" />
                  ) : social.name === 'Instagram' ? (
                    <FaInstagram className="text-xl" />
                  ) : social.name === 'WhatsApp' ? (
                    <FaWhatsapp className="text-xl" />
                  ) : (
                    <FiMail className="text-xl" />
                  )}
                </a>
              ))}
            </div>
            <p className="text-gray-600 text-xs md:text-sm pt-2">
              © 2026 Airalabel. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
