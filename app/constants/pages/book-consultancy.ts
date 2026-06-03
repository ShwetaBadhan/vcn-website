export const CONSULTATION_PAGE_DATA = {
  consultation: {
    leftContent: {
      title: "Consultation Form",

      formFields: {
        firstName: {
          label: "First Name",
          placeholder: "First Name",
          required: true
        },

        lastName: {
          label: "Last Name",
          placeholder: "Last Name",
          required: true
        },

        age: {
          label: "Age",
          placeholder: "Ex. 22",
          required: true
        },

        weight: {
          label: "Weight (in kg)",
          placeholder: "Ex. 45",
          required: true
        },

        phone: {
          label: "Phone/Mobile (With Country Code)",
          placeholder: "917750824146",
          required: true
        },

        email: {
          label: "Email",
          placeholder: "Email Address",
          required: false
        },

        gender: {
          label: "Gender",
          placeholder: "Select Gender",
          required: true,

          options: [
            "Male",
            "Female",
            "Other"
          ]
        },

        city: {
          label: "City",
          placeholder: "City",
          required: true
        },

        pincode: {
          label: "Pincode",
          placeholder: "Pincode",
          required: true
        }
      },

      healthIssues: {
        label: "Health Issues (Select At Least One)",

        options: [
          "Thyroid",
          "Weight gain",
          "Hormonal issues",
          "Hair Fall",
          "Pigmentation",
          "Other"
        ]
      },

      descriptionField: {
        label: "Describe Your Problem",
        placeholder:
          "Please describe your health issue in detail..."
      },

      submitButton: "Submit Form"
    },

    rightContent: {
      subtitle: "Your Health, Our Priority",

      title: "5 Lakh Happy Customers",

      stats: [
        {
          value: "50+",
          label: "Experts"
        },

        {
          value: "Free",
          label: "Consultation"
        },

        {
          value: "Regular",
          label: "Follow-ups"
        }
      ],

      image: {
        src: "/img/image/Consultation.png",
        alt: "Health Experts"
      }
    },

    branchLocations: [
      {
        title:
          "Visit our Team of Trained Health Experts at our Gurgaon Branch",

        address:
          "Unit No. 307 & 308, Tower A, Pioneer Urban Square, Golf Course Ext Rd, Sector 62, Gurugram, Ghata, Haryana 122005"
      },

      {
        title:
          "Visit our Team of Trained Health Experts at our Jalandhar Branch –",

        address:
          "SCO 41, Chotti Baradari Part 2, Opposite PIMS Hospital, Jalandhar, Punjab 144001"
      }
    ],

    contactInformation: [
      {
        title: "Contact our Global Support Team at –",

        address:
          "VCN Tower, 37/2 Cool Road, Jalandhar, Punjab, INDIA-144001",

        phone:
          "+91-181-4010154, M:+919876453626",

        email:
          "info@vcnhealth.com",

        workingHours:
          "Mon – Sat: 9:00 AM – 6:00 PM"
      },

      {
        title: "Contact our India (Domestic) Team",

        address:
          "VCN Shop No.24/25, Block C. PPR Village, Chandigarh Express way",

        phone:
          "+91 22 3456 7890",

        email:
          "mumbai@vcnhealth.com",

        workingHours:
          "Mon – Sat: 9:00 AM – 6:00 PM"
      }
    ]
  }
}