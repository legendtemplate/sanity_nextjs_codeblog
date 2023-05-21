import React from "react";
import Container from "../container/page";
import Social from '@/components/blog/left/social/inner'

export default function page() {
  return (
    <>
      <footer className="footer-section bg-gray-100 pt-20">
        <div>
          <Container>
            <div className="footer-content pt-5 pb-10">
              <div className="row grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                <div className="mb-12">
                  <div className="footer-widget">
                    <div className="mb-7">
                      <a href="">
                        <img
                          src="https://i.ibb.co/QDy827D/ak-logo.png"
                          className="w-12 h-12 "
                          alt="logo"
                        />
                      </a>
                    </div>
                    <div className="">
                      <p className="text-sm text-gray-700 leading-relaxed mb-4">
                        Lorem ipsum dolor sit amet, consec tetur adipisicing
                        elit, sed do eiusmod tempor incididuntut consec tetur
                        adipisicing elit,Lorem ipsum dolor sit amet.
                      </p>
                    </div>
                 <Social />
                  </div>
                </div>
                <div className="mb-7">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                      <h3 className="text-black font-semibold text-xl mb-10 relative">Useful Links</h3>
                    </div>
                    <ul className="grid grid-cols-2 gap-y-4">
                      <li>
                        <a href="#" className="text-gray-600 capitalize hover:text-red-500">Home</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">about</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">services</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">portfolio</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">Contact</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">About us</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">Our Services</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">Expert Team</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">Contact us</a>
                      </li>
                      <li>
                        <a className="text-gray-600 capitalize hover:text-red-500" href="#">Latest News</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mb-12">
                  <div className="footer-widget">
                    <div className="footer-widget-heading">
                    <h3 className="text-black font-semibold text-xl mb-10 relative">Subscribe</h3>
                    </div>
                    <div className="footer-text mb-6">
                      <p>
                        Don’t miss to subscribe to our new feeds, kindly fill
                        the form below.
                      </p>
                    </div>
                    <div className="subscribe-form overflow-hidden">
                      <form action="#">
                        <input type="text" placeholder="Email Address" className="w-full outline-none text-white border-2 border-solid border-gray-700 bg-gray-700 py-3 px-7" />
                        <button className="w-full py-3 bg-red-400 text-white mt-3 rounded hover:bg-white font-semibold hover:text-red-500">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <div className="copyright-area bg-gray-950 py-6">
          <Container>
              <div className="flex items-center justify-between">
                <div className="copyright-text">
                  <p className="text-center text-base text-gray-200">
                    Copyright &copy; 2018, All Right Reserved{" "}
                    <a href="https://codepen.io/anupkumar92/" className="text-red-400">Anup</a>
                  </p>
                </div>
                <div className="hidden lg:block ">
                <div className="footer-menu">
                  <ul className="flex gap-5 ">
                    <li>
                      <a className="text-gray-100 hover:text-red-500" href="#">Home</a>
                    </li>
                    <li>
                      <a className="text-gray-100 hover:text-red-500" href="#">Terms</a>
                    </li>
                    <li>
                      <a className="text-gray-100 hover:text-red-500" href="#">Privacy</a>
                    </li>
                    <li>
                      <a className="text-gray-100 hover:text-red-500" href="#">Policy</a>
                    </li>
                    <li>
                      <a className="text-gray-100 hover:text-red-500" href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              </div>
              
          </Container>
        </div>
      </footer>
    </>
  );
}
