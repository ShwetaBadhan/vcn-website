
export const HOME_PAGE_DATA = {
    hero: {
        key: "hero-section",
        videoUrl: "/video/vcnCoverVideo.mp4",
        backgroundImage: "",
        image: "",
        title: "Transform Your Health. Transform Your Life.",
        description: "Discover products you trust and opportunities that grow with you.",
        buttonText: "Shop Now",
        buttonLink: "/all-products",
    },

    offers: {
        key: "offers-section",
        backgroundImage: "",

        leftContent: {
            badge: "Bundle + Save 25%",
            title: "OUR MONTHLY OFFERS",
            description:
                "Step into a world of natural wellness, trusted personal care, and rewarding growth opportunities. VCN is committed to providing quality products that nurture your health, support your everyday needs, and inspire a better, healthier future.",
            buttonText: "Monthly Offers",
            buttonLink: "/all-products",
        },

        rightContent: {
            mainImage: "/img/image/frst image.png",
            thumbnails: [
                "/img/image/4th image img.png",
                "/img/image/secon img.png",
                "/img/image/third  img.png",
            ],
        },
    },

    featuredProducts: {
        key: "featured-products",

        header: {
            title: "Natural Wellness You Can Trust",

            subtitle:
                "Explore our wide range of health, wellness, and personal care products designed to support your everyday needs.",

            buttonText: "Shop All",
            buttonLink: "/all-products",
        },

        productCard: {
            productLabel: "VCN-02",

            badges: {
                bestseller: "Bestseller",
                new: "New",
            },

            shopButtonText: "Shop Now",

            image: "/img/products/img1.png",

            video: "/video/pvide.mp4",
        },
    },

    probiotics: {
        key: "probiotics",
        backgroundImage: "",

        leftContent: {
            brandTag: "ViaCapsi Technology",
            heading: "Natural Solutions for Better Living",

            statBox: {
                badge: "VCN-01",
                label: "Increases healthy bacteria by",
                icon: "↑",
                value: "4.6",
                multiplier: "x*",
            },

            disclaimer:
                "*In a clinical trial of vs 103 individuals with occasional GI challenges",
        },

        rightContent: {
            productImage: "/gif/Capsule-GIF-2.gif",

            topCallout: {
                title: "Outer Capsule",
                text: "Prepared with natural ingredients to support overall wellness and body balance",
            },

            bottomCallout: {
                title: "Inner Capsule",
                text: "Formulated using natural sources to promote everyday digestive comfort and internal balance",
            },
        },
    },

    diseaseBundles: {
        key: "disease-bundles",

        leftContent: {
            logoText: "VCN",

            heading: "Trusted Wellness. Growing Opportunities.",

            description:
                "We focus on trusted, research-backed products that support everyday wellness and customer satisfaction. With a growing presence across India, VCN also empowers individuals through meaningful direct selling opportunities.",

            buttonText: "Disease Bundles",
            btnicon: ">",

            videoUrl:
                "https://stream.mux.com/87tnV011w6GkwNzl7dxntQSNhpcVSJNgSQaqlj3iLTK00.m3u8?redundant_streams=true",

            skeletonImage: "/img/image/skelton.png",
        },

        popupContent: {
            title: "Proven Bundles For Your Health Needs!",

            subtitle:
                "Check out our custom bundles based on your current health conditions",


            cards: [
                {
                    title: "Acidity",
                    image: "/img/image/acidty.png",
                    link: "/bundle-details",
                },
                {
                    title: "Thyroid",
                    image: "/img/image/thyroid.png",
                    link: "/bundle-details",
                },
                {
                    title: "Diabetes",
                    image: "/img/image/diabetes.png",
                    link: "/bundle-details",
                },
                {
                    title: "Fatty Liver",
                    image: "/img/image/liver.png",
                    link: "/bundle-details",
                },
            ],
            viewMoreText: "VIEW MORE",

            viewMoreLink: "/all-disease-bundles",
        },
    },

    testimonials: {
        key: "testimonials",

        header: {
            title: "Thousands Are Redefining Their Health with VCN.",
            subtitle:
                "Discover how VCN is helping people take control of their wellness journey.",
        },

        slider: {
            avatarImage: "/img/testimonial/testimonial.png",

            slides: [
                {
                    image: "/img/testimonial/testimonial.png",
                    alt: "Customer testimonial",
                },
                {
                    image: "/img/image/testimonial.png",
                    alt: "Customer testimonial",
                },
                {
                    image: "/img/testimonial/testimonial.png",
                    alt: "Customer testimonial",
                },
                {
                    image: "/img/image/testimonial.png",
                    alt: "Customer testimonial",
                },
            ],
        },
    },

    consultancyCTA: {
        key: "consultancy-cta",

        backgroundImage: "",

        leftContent: {
            image: "/img/image/consultion.png",
            imageAlt: "Doctor with stethoscope",
        },

        rightContent: {
            heading: "Need help achieving your health goals?",
            description: "Schedule or consult with us today.",
            buttonText: "Consult now for free",
            buttonLink: "/book-consultancy",
        },
    },

    stories: {
        key: "stories",

        backgroundImage: "",

        header: {
            title: "Stories from scientists, innovators, and members like you.",
        },

        gallery: {
            images: [
                "/img/image/Stories from scientists  806.png",
                "/img/image/Stories from scientists  552by 864.png",
                "/img/image/Stories from scientists  806.png",
                "/img/image/Stories from scientists  644.png",
                "/img/image/Stories from scientists  552by 864.png",
                "/img/image/Stories from scientists  806.png",
                "/img/image/Stories from scientists  644.png",
            ],
        },

        cards: [
            {
                title: "VCN R&D",
                description: "Because health is not just human.",
                buttonText: "Read More",
                buttonLink: "/vcn-R-D",
            },
            {
                title: "BUSINESS OPPORTUNITY",
                description: "Feel lasting relief in one week with VCN-01",
                buttonText: "Shop Now",
                buttonLink: "/product-details",
            },
        ],
    },
}   
