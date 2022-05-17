import React, {useEffect} from 'react';
import {Helmet} from 'react-helmet';
import {navigate} from 'gatsby';
import {useTranslation} from '@modules/localization';
import {getInitialLocale} from '@utils';
import {SEO} from '@modules/utility';

//This page doesn't exist and solely acts as a reroute for language.
const IndexPage = () => {
  const {allLocales, DEFAULT_LOCALE} = useTranslation();

  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      let initialLocale = getInitialLocale(allLocales, DEFAULT_LOCALE);

      //Replace current route with locale based index.
      navigate(`/${initialLocale}/`, {replace: true});
    }
  });

  const seo = {
    title: 'Ocean Protocol Marketplace Launchpad',
    description:
      'Learn how to make your own blockchain-powered marketplace by forking Ocean Market',
    keywords: 'Ocean protocol, learning, community, marketplace, contribute',
    featuredImage: 'images/creatures/mantaray/mantaray-full@2x.png'
  };

  return (
    <Helmet>
      <meta name="robots" content="noindex, nofollow" />
      <SEO {...seo} />
    </Helmet>
  );
};

export default IndexPage;
