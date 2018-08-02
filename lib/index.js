import React from "react";
import PropTypes from "prop-types";
import { getApp, getAndroidDeepLink, getIOSDeepLink } from "url-to-deep-link";

// from: https://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
const getMobileOperatingSystem = () => {
  const userAgent =
    window.navigator.userAgent || window.navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return "Windows Phone";
  }

  if (/android/i.test(userAgent)) {
    return "Android";
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return "iOS";
  }

  return "unknown";
};

const onClick = (android, iOS, href, blank) => {
  try {
    if (getMobileOperatingSystem() === "iOS") {
      document.location = iOS;
    } else if (getMobileOperatingSystem() === "Android") {
      document.location = android;
    } else {
      fallback(href, blank);
    }
  } catch (err) {
    // Reload window to have correct document
    window.location.reload(true);

    fallback(href, blank);
  }
};

const fallback = (href, blank) => {
  // Open in same or different window the original URL
  if (blank) window.open(href, "_blank");
  else window.location = href;
};

const OpenApp = ({ href, android, ios, blank, children, ...rest }) => {
  // Set deep links (prop => library => original url)
  const androidDeepLink = android || getAndroidDeepLink(href) || href;
  const iOSDeepLink = ios || getIOSDeepLink(href) || href;

  return (
    <a
      href={href}
      onClick={e => {
        e.preventDefault();
        onClick(androidDeepLink, iOSDeepLink, href, blank);
      }}
      {...rest}
    >
      {children}
    </a>
  );
};

OpenApp.propTypes = {
  href: PropTypes.string.isRequired,
  android: PropTypes.string,
  ios: PropTypes.string,
  blank: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
OpenApp.defaultProps = {
  href: "",
  blank: true,
};

export default OpenApp;
