<template>
  <div>
    <!-- Hero Section -->
    <header
      class="relative bg-cover bg-center min-h-screen flex items-center justify-center"
      style="
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),
          url('/images/give.jpg');
      "
    >
      <div class="container mx-auto text-center px-4 py-24">
        <h1
          class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-white"
        >
          GIVE
        </h1>
        <p class="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">
          "Each one must give as he has decided in his heart, not reluctantly or
          under compulsion, for God loves a cheerful giver."
          <br />
          <span class="text-amber-300">-2 Corinthians 9:7</span>
        </p>
      </div>
    </header>

    <main class="container mx-auto p-6 md:p-12">
      <!-- Ministry Introduction -->
      <section class="mb-16">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-amber-600 mb-4">
            R.O.C.K. Bridge Ministries
          </h2>
          <p class="text-gray-600 max-w-4xl mx-auto leading-relaxed text-lg">
            If you wish to help us expand our ministries of discipleship,
            development, and empowerment in Nakuru, we invite you to partner
            with R.O.C.K. Bridge Ministries. We believe in creating
            sustainability in missions and not dependence on our help;
            therefore, the donations we collect are used for creating lifelong
            investments in the Kingdom of God in Nakuru.
          </p>
        </div>
      </section>

      <!-- Ministry Cards -->
      <section class="mb-16">
        <h2
          class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12"
        >
          Our Ministry Initiatives
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <MinistryCard
            v-for="ministry in ministries"
            :key="ministry.title"
            :ministry="ministry"
            @donate="openDonationModal"
          />
        </div>
      </section>

      <!-- Payment Information -->
      <section class="bg-white rounded-xl shadow-lg p-8 mb-16">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Payment Options -->
          <div class="space-y-6">
            <div class="p-4 bg-amber-100 border-l-4 border-amber-600 rounded">
              <h2 class="font-bold text-lg mb-2">DONATE NOW</h2>
              <p class="text-sm">
                All donations to R.O.C.K. Bridge Ministries are 501(c)(3)
                tax-deductible.
              </p>
            </div>

            <p class="text-sm leading-relaxed text-gray-600">
              If you feel led to support R.O.C.K. Bridge Ministries or one of
              our ministries/projects you have a couple of options for giving.
              We would encourage you to consider using a credit card by choosing
              one of the options above. You have the availability to make a full
              one-time payment or set up regular automatic monthly payments.
            </p>

            <div class="flex items-center space-x-2 flex-wrap">
              <img src="/images/visa.png" alt="Visa" class="h-8" />
              <img src="/images/mastercard.png" alt="Mastercard" class="h-8" />
              <img src="/images/discover.png" alt="Discover" class="h-8" />
              <img src="/images/amex.png" alt="American Express" class="h-8" />
              <img src="/images/jcb.png" alt="JCB" class="h-8" />
            </div>
          </div>

          <!-- Contact & Alternative Payment Methods -->
          <div class="space-y-6">
            <div>
              <h3 class="font-semibold text-gray-800 mb-3">
                Alternative Payment Method
              </h3>
              <p class="text-sm text-gray-600 mb-2">Checks may be mailed to:</p>
              <address
                class="not-italic text-sm text-gray-600 bg-gray-50 p-4 rounded-lg"
              >
                <strong>R.O.C.K. Bridge Ministries, Inc.</strong><br />
                3375 Piedmont Rd NE, Bldg 12, Ste 1330<br />
                Atlanta, GA 30305<br />
                <span class="font-medium">Phone: 770-308-7276</span>
              </address>
            </div>

            <div class="space-y-4">
              <h3 class="font-semibold text-gray-800">Other Ways to Give</h3>
              <div class="flex flex-col space-y-3">
                <a
                  href="https://www.gofundme.com/f/rockbridge-ministries-water-project"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block"
                >
                  <img
                    src="/images/gofundme.jpg"
                    alt="GoFundMe"
                    class="h-12 w-auto"
                  />
                </a>
                <a href="#" class="block">
                  <img src="/images/amazon-smile-logo.png" alt="Amazon Smile" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Donation Modal -->
    <DonationModal
      :is-open="showDonationModal"
      :selected-initiative="selectedInitiative"
      :donation="donation"
      :is-processing="isProcessing"
      :error-message="errorMessage"
      :success-message="successMessage"
      :stripe="stripe"
      :card-element="cardElement"
      @close="closeModal"
      @submit="handleDonation"
      @card-ready="setupStripeElements"
    />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import donationService from "../../services/donationService";
import DonationModal from "../../components/DonationModal.vue";
import MinistryCard from "../../components/MinistryCard.vue";

// Reactive state
const showDonationModal = ref(false);
const selectedInitiative = ref("");
const isProcessing = ref(false);
const errorMessage = ref("");
const successMessage = ref("");
const stripe = ref(null);
const elements = ref(null);
const cardElement = ref(null);

const donation = reactive({
  amount: null,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  postalCode: "",
  message: "",
  ministry: "",
});

// Ministry data
const ministries = ref([
  {
    title: "Holiday Homes",
    image: "/images/holidayhomes.jpg",
    description: [
      "High-end hospitality business builds a sustainable, income-generating model to aid aspiring students from vulnerable communities. Revenue from Holiday Homes will support higher education for children from aiekele communities and the orphans graduating from Tumaini Mission School and Children's Home.",
    ],
    quote: {
      text: "Even though there are many limitations during these difficult days, it is not time to be sleeping. The time to build is now!",
      author: "Zablon Koria",
    },
  },
  {
    title: "Clean Water Initiative",
    image: "/images/water.jpg",
    description: [
      "R.O.C.K. Bridge Ministries is committed to sustainability through our Clean Water Initiative. Started in 2019, we provide clean, accessible water to households. With donations from U.S. partners, we surpassed our first water target and continue supplying water to the community.",
      "In memory of Reverend Dr. Lane, we've acquired two more water trucks. Your donation helps us purchase more water trucks and drilling equipment to reach vulnerable groups in need.",
    ],
  },
  {
    title: "Workplace Ministry",
    image: "/images/workplace.jpg",
    description: [
      "Supporting this rapidly growing ministry helps us meet requests from business owners who want someone to share God's word in their workplace. We need ongoing support and additional staff to expand this ministry.",
      "We need a ministry van for workplace evangelism logistics, home visits, and community outreach, plus a laptop for teachings and communications.",
    ],
  },
  {
    title: "Lish AI Labs",
    image: "/images/lishai.jpg",
    description: [
      "A digital skills training and job aggregator firm based in Nakuru. In partnership with R.O.C.K Bridge ministries, the ministry of ICT, and other key stakeholders, we provide young people with digital skills in AI and Machine Learning while creating employment opportunities.",
    ],
  },
  {
    title: "Upendo Academy",
    image: "/images/upendo.jpg",
    description: [
      "The majority of children in the Kaptembwa Estate surrounding the Upendo Church cannot attend school due to inability to pay fees. Supporting these children provides quality education, school uniforms, and nutritional meals.",
    ],
  },
]);

// Initialize Stripe on mount
onMounted(async () => {
  try {
    stripe.value = await donationService.getStripe();
  } catch (error) {
    console.error("Failed to load Stripe:", error);
    errorMessage.value =
      "Failed to load payment system. Please refresh the page.";
  }
});

// Modal functions
const openDonationModal = (initiative) => {
  selectedInitiative.value = initiative;
  donation.ministry = initiative;
  showDonationModal.value = true;
  errorMessage.value = "";
  successMessage.value = "";
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showDonationModal.value = false;
  document.body.style.overflow = "";

  if (cardElement.value) {
    cardElement.value.destroy();
    cardElement.value = null;
  }

  resetForm();
};

const setupStripeElements = () => {
  if (!stripe.value) return;

  elements.value = stripe.value.elements();
  cardElement.value = elements.value.create("card", {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  });

  cardElement.value.mount("#card-element");
  cardElement.value.on("change", ({ error }) => {
    const displayError = document.getElementById("card-errors");
    if (error) {
      displayError.textContent = error.message;
    } else {
      displayError.textContent = "";
    }
  });
};

const resetForm = () => {
  Object.assign(donation, {
    amount: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    postalCode: "",
    message: "",
    ministry: "",
  });
};

const handleDonation = async () => {
  if (!stripe.value || !elements.value) {
    errorMessage.value =
      "Payment system not ready. Please refresh and try again.";
    return;
  }

  isProcessing.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    // Create payment intent
    const intentResponse = await donationService.createPaymentIntent({
      ministry: donation.ministry,
      amount: donation.amount,
      currency: "USD",
      donorInfo: {
        firstName: donation.firstName,
        lastName: donation.lastName,
        email: donation.email,
        phone: donation.phone,
        postalCode: donation.postalCode,
      },
      isRecurring: false,
      message: donation.message,
    });

    if (!intentResponse.success) {
      throw new Error(
        intentResponse.message || "Failed to create payment intent"
      );
    }

    // Confirm payment with Stripe
    const { error: stripeError, paymentIntent } =
      await stripe.value.confirmCardPayment(intentResponse.data.clientSecret, {
        payment_method: {
          card: cardElement.value,
          billing_details: {
            name: `${donation.firstName} ${donation.lastName}`,
            email: donation.email,
            phone: donation.phone,
            address: {
              postal_code: donation.postalCode,
            },
          },
        },
      });

    if (stripeError) {
      throw new Error(stripeError.message);
    }

    if (paymentIntent.status === "succeeded") {
      // Confirm donation in backend
      const confirmResponse = await donationService.confirmDonation({
        paymentIntentId: paymentIntent.id,
        ministry: donation.ministry,
        donorInfo: {
          firstName: donation.firstName,
          lastName: donation.lastName,
          email: donation.email,
          phone: donation.phone,
          postalCode: donation.postalCode,
        },
        amount: donation.amount,
        currency: "USD",
        isRecurring: false,
        message: donation.message,
      });

      if (!confirmResponse.success) {
        throw new Error(
          confirmResponse.message || "Failed to confirm donation"
        );
      }

      successMessage.value = `Thank you! Your donation of ${donation.amount} has been processed successfully. You should receive an email confirmation shortly.`;

      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  } catch (err) {
    console.error("Donation error:", err);
    errorMessage.value =
      err.message || "An error occurred while processing your donation";
  } finally {
    isProcessing.value = false;
  }
};
</script>
