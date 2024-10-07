import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Collections from './components/Collections/Collections';
import Contact from './components/Contact/Contact';
import About from './components/About/About';  // Add this line
import Footer from './components/Footer';
import { Helmet } from 'react-helmet';
import { TitleProvider, useTitle } from './contexts/TitleContext';
import { theme } from './styles/theme';

// Add this function to get the basename
function getBasename() {
  return process.env.NODE_ENV === 'production'
    ? '/' + process.env.REACT_APP_REPO_NAME
    : '/';
}

function AppContent() {
  const { title } = useTitle();

  return (
    <div className={css(styles.appWrapper)}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <main className={css(styles.mainContent)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />  {/* Add this line */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router basename={getBasename()}>
      <TitleProvider>
        <AppContent />
      </TitleProvider>
    </Router>
  );
}

const styles = StyleSheet.create({
  '@global': {
    '*': {
      boxSizing: 'border-box',
    },
    'html, body, #root': {
      height: '100%',
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: theme.fonts.main,
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale',
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
    },
  },
  appWrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: '1 0 auto',
    marginTop: theme.sizes.headerHeight,
    marginBottom: theme.sizes.footerHeight,
    [theme.breakpoints.mobile]: {
      padding: '0',
    },
  },
});

export default App;