// src/components/PrivacyPolicy.tsx
import { Box, Container, Heading, Text, Link, Divider } from '@chakra-ui/react';

const PrivacyPolicy = () => (
  <Box bg="white" minH="100vh" py={12}>
    <Container maxW="container.md" px={[4, 6, 8]}>

      {/* sidebar_position is only for Docusaurus, ignore in app */}


      <Heading as="h1" size="xl" mb={2}>
        Privacy Policy – BharatWebNavigator
      </Heading>
      <Text fontSize="sm" color="gray.600" mb={6}>
        <em>Last updated: 05 Aug 2025</em>
      </Text>

      <Text mb={6}>
        BharatWebNavigator (“we”, “our”, “the Browser”) is a Chromium-based Android web browser built for Indian e-governance users. This policy explains what data we collect at sign-in, why we collect it, how we protect it and the choices you have under India’s Digital Personal Data Protection Act 2023, the EU GDPR, the California CCPA and Google Play rules.
      </Text>

      <Divider my={6} />

      <Heading as="h2" size="lg" mb={4}>1 Data we collect</Heading>
      <Text mb={4}>
        We only collect information you choose to give us when you create an account or sign in:
      </Text>
      <ul>
        <li>First name and last name (registration only).</li>
        <li>Email address.</li>
        <li>Password (transmitted in encrypted form, never stored in plain text).</li>
        <li>Access token, refresh token and token expiry time that our server returns after successful login.</li>
      </ul>
      <Text mt={4}>
        We do <strong>not</strong> collect browsing history, page content, crash logs, usage analytics or device identifiers.
      </Text>

      <Heading as="h2" size="lg" mt={10} mb={4}>2 How we use the data</Heading>
      <ul>
        <li>Authenticate you and keep you signed in.</li>
        <li>Store tokens securely on your device so you can use government portals without re-entering credentials.</li>
        <li>Refresh expired tokens when you ask the browser to continue a signed-in session.</li>
      </ul>
      <Text mt={4}>We do <strong>not</strong> use your data for advertising or profiling, and we never sell it.</Text>

      <Heading as="h2" size="lg" mt={10} mb={4}>3 Sharing and disclosure</Heading>
      <Text mb={4}>
        Data is sent only to our authentication service at{' '}
        <Link color="blue.600" href="https://auth.ajna.dev" isExternal>
          https://auth.ajna.dev
        </Link>.  
        We do not share personal information with third parties except when required by law.
      </Text>

      <Heading as="h2" size="lg" mt={10} mb={4}>4 Data retention and deletion</Heading>
      <ul>
        <li>Tokens remain on your device until you sign out or uninstall the app.</li>
        <li>Our server keeps registration and login records for a maximum of thirty days for security auditing, after which they are automatically deleted.</li>
        <li>You may request deletion of your server-side account data at any time by emailing{' '}
          <Link color="blue.600" href="mailto:contact@ajna.dev">contact@ajna.dev</Link>.
        </li>
      </ul>

      <Heading as="h2" size="lg" mt={10} mb={4}>5 Security measures</Heading>
      <Text>
        All network traffic is protected with TLS. Tokens are stored in encrypted form in the app’s private storage. Server access is restricted to authorised personnel and logged.
      </Text>

      <Heading as="h2" size="lg" mt={10} mb={4}>6 Your rights and choices</Heading>
      <Text>
        You may ask to access, correct or delete your personal data, or object to its processing. Send any request to{' '}
        <Link color="blue.600" href="mailto:contact@ajna.dev">contact@ajna.dev</Link>; we respond within thirty days.
      </Text>

      <Heading as="h2" size="lg" mt={10} mb={4}>7 Children</Heading>
      <Text>
        The app is rated <strong>3+</strong> on Google Play and is suitable for general audiences. We do not knowingly collect personal data from children under three years of age. If you believe such data has been provided, contact us and we will delete it promptly.
      </Text>

      <Heading as="h2" size="lg" mt={10} mb={4}>8 Changes to this policy</Heading>
      <Text>
        If we make material changes, we will notify you in-app at least thirty days before the new terms take effect and update the date at the top of this page.
      </Text>

      <Heading as="h2" size="lg" mt={10} mb={4}>9 Contact</Heading>
      <Text mb={12}>
        Email: <Link color="blue.600" href="mailto:contact@ajna.dev">contact@ajna.dev</Link>
      </Text>

      <Text fontStyle="italic" fontSize="lg">
        BharatWebNavigator – Empowering Digital India
      </Text>

    </Container>
  </Box>
);

export default PrivacyPolicy;