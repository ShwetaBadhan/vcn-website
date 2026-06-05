export const CHECKOUT_PAGE_DATA = {
    checkout: {
        accountStep: {
            step: "1 of 3",
            title: "Create Your Account",
            i:"G",
            googleButton: "Continue with Google",
            divider: "or",
            emailButton: "Sign Up with Email",
            emailPlaceholder: "Email",
            passwordPlaceholder: "Password",
            continueButton: "Continue",
            haveAccountText: "Have an account?",
            signInButton: "Sign In",
            completedMessage: "Account created successfully"
        },

        learnSection: {
            title: "LEARN AS YOU VCN",
            description:
                "Your body is home to 38 trillion bacteria. 95% of these (36 Trillion) live in your gut.",
            checkboxText:
                "Guide me along the way with tips, information, and nerdy reads. Unsubscribe anytime."
        },

        shippingStep: {
            step: "2 of 3",
            title: "Shipping Information",
            firstNamePlaceholder: "First Name",
            lastNamePlaceholder: "Last Name",
            addressPlaceholder: "Address",
            cityPlaceholder: "City",
            statePlaceholder: "State",
            zipPlaceholder: "ZIP",
            continueButton: "Continue to Payment",
            completedMessage: "Shipping information saved"
        },

        paymentStep: {
            step: "3 of 3",
            title: "Payment",
            cardNumberPlaceholder: "Card Number",
            expiryPlaceholder: "MM/YY",
            cvvPlaceholder: "CVV",
            cardNamePlaceholder: "Name on Card",
            placeOrderButton: "Place Order -",
            completedMessage: "Payment information saved"
        },

        cartSummary: {
            title: "Cart Summary",
            emptyCartMessage: "Your cart is empty",
            continueShopping: "Continue Shopping",

            promo: {
                title: "Promo Code",
                description:
                    "We found you a better deal! Applied holiday30 (30% off) for higher savings.",
                placeholder: "Enter Promo Code",
                applyButton: "Apply"
            },

            subtotal: "Subtotal",
            shipping: "Shipping",
            taxes: "Taxes",
            free: "Free",
            total: "Total",

            recurringNote:
                "Final tax and shipping is calculated after shipping step is complete. Recurring subtotal is"
        },

        validation: {
            emailRequired: "Email is required",
            invalidEmail: "Please enter a valid email address",

            passwordRequired: "Password is required",
            passwordMinLength: "Password must be at least 8 characters",
            passwordFormat:
                "Password must contain at least one uppercase letter, one lowercase letter, and one number",

            firstNameRequired: "First name is required",
            firstNameMinLength: "First name must be at least 2 characters",

            lastNameRequired: "Last name is required",
            lastNameMinLength: "Last name must be at least 2 characters",

            addressRequired: "Address is required",
            addressInvalid: "Please enter a complete address",

            cityRequired: "City is required",

            stateRequired: "State is required",
            stateInvalid: "Please enter a valid state",

            zipRequired: "ZIP code is required",
            zipInvalid: "Please enter a valid 6-digit ZIP code",

            cardNumberRequired: "Card number is required",
            cardNumberInvalid: "Please enter a valid card number",

            expiryRequired: "Expiry date is required",
            expiryInvalid: "Please enter a valid expiry date (MM/YY)",

            cvvRequired: "CVV is required",
            cvvInvalid: "Please enter a valid CVV (3 or 4 digits)",

            cardNameRequired: "Name on card is required",
            cardNameInvalid:
                "Please enter the complete name as shown on card"
        },

        alerts: {
            googleSignin: "Google sign-in would open here",
            orderSuccess: "Order placed successfully!"
        }
    }
}