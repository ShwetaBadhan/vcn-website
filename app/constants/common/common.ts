// src/constants/index.ts
export const COMMON_DATA = {
    navbar: {
        logo: "/img/logo/logo.png",

        desktopMenu: [
            {
                label: "Shop",
                key: "shop",
                footerLink: {
                    text: "Shop All Products →",
                    link: "/all-products"
                }
            },
            {
                label: "Science",
                items: [
                    {
                        title: "V-GANO",
                        image: "/img/drop-down/abput us.png",
                        link: "/all-products"
                    },
                    {
                        title: "V-VEDA",
                        image: "/img/image/vcnlabs.png",
                        link: "/all-products"
                    }
                ]
            },
            {
                label: "About Us",
                items: [
                    {
                        title: "R & D",
                        image: "/img/drop-down/blog.png",
                        link: "/vcn-R-D"
                    },
                    {
                        title: "Contact Us",
                        image: "/img/drop-down/sustainability.png",
                        link: "/contact-us"
                    }
                ]
            }
        ],

        mobileMenu: [
            {
                label: "Shop",
                accordion: "shopAccordion"
            },
            {
                label: "Science",
                accordion: "scienceAccordion"
            },
            {
                label: "Learn",
                accordion: "learnAccordion"
            }
        ],

        buttons: {
            login: "Login",
            cart: "Cart"
        },

        authModal: {
            title: "Sign In",
            mobileLabel: "Mobile Number",
            passwordLabel: "Password",
            forgotPassword: "Forgot Password",

            registerTitle: "Register",

            preferredCustomer: "PREFERRED CUSTOMER",
            businessOwner: "VCN BUSINESS OWNER",

            termsText: "Terms & Conditions",
            privacyText: "Privacy"
        }
    },

    topFooter: {
        logo: "/img/logo/logo.png",

        tagline: {
            title: "Advancing Wellness for Everyday Life",
            description:
                "Bringing together nature, innovation, and trust to support healthier lifestyles across communities."
        },

        newsletter: {
            title: "Stay Connected with VCN — Wellness Updates in Your Inbox",
            subtitle:
                "Be the first to know about new products, exclusive offers, and health tips.",
            placeholder: "Enter your email",

            disclaimer:
                "The information provided is for general wellness purposes only and is not intended to diagnose, treat, cure, or prevent any disease."
        },

        columns: [
            {
                title: "Products",
                links: [
                    {
                        text: "Shop All",
                        link: "/all-products"
                    }
                ]
            },
            {
                title: "About",
                links: [
                    {
                        text: "Who We Are",
                        link: "/about-us"
                    },
                    {
                        text: "Blogs",
                        link: "/blog"
                    },
                    {
                        text: "Book Consultancy",
                        link: "/book-consultancy"
                    }
                ]
            },
            {
                title: "Help",
                links: [
                    {
                        text: "Help",
                        link: "#"
                    },
                    {
                        text: "Contact",
                        link: "/contact-us"
                    },
                    {
                        text: "My Account",
                        link: "/login"
                    }
                ]
            },
            {
                title: "Social",
                links: [
                    {
                        text: "Instagram",
                        link: "https://www.instagram.com/vcnorganic/"
                    },
                    {
                        text: "Facebook",
                        link: "https://www.facebook.com/VCNorganic"
                    },
                    {
                        text: "Pinterest",
                        link: "https://in.pinterest.com/vcn_organic/"
                    }
                ]
            },
            {
                title: "Legal",
                links: [
                    {
                        text: "Terms + Conditions",
                        link: "/terms-conditions"
                    },
                    {
                        text: "Privacy Policy",
                        link: "/privacy-policy"
                    },
                    {
                        text: "Accessibility",
                        link: "/accessibility"
                    },
                    {
                        text: "Cancellation & Refund Process",
                        link: "/cancellation-and-refund-process"
                    },
                    {
                        text: "Disclaimer",
                        link: "/disclaimer"
                    },
                    {
                        text: "Shipping Policy",
                        link: "/shipping-policy"
                    },
                    {
                        text: "Grievance Redressal",
                        link: "/grievance-redressal"
                    }
                ]
            }
        ],
    },

    bottomFooter: {
        image: "/img/gif/Makes-Life-Better-2.gif",
        copyrightText: "© 2025 VCN MLM. All rights reserved."
    },

    sidebar: [
        {
            title: 'Our Journey',
            link: '/our-journey'
        },
        {
            title: 'VCN India',
            link: '/about-us'
        },
        {
            title: 'Our Leadership',
            link: '/our-leadership'
        },
        {
            title: 'News',
            link: '/news'
        },
        {
            title: 'Careers at VCN',
            link: '/careers'
        },
        {
            title: 'FAQs',
            link: '/faqs'
        }
    ],

}

