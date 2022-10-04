import { Facebook, Twitter, Instagram } from "@mui/icons-material";

export const SOCIAL_LINKS: Array<{ icon: React.ReactNode; tooltip: string }> = [
  {
    icon: <Facebook />,
    tooltip: "Follow us on Facebook",
  },
  {
    icon: <Twitter />,
    tooltip: "Follow us on Twitter",
  },
  {
    icon: <Instagram />,
    tooltip: "Follow us on Instagram",
  },
];

export const CONTACT = [
  {
    label: "Address",
    value: "1234 Street Name, City, England",
  },
  {
    label: "Phone",
    value: "(123) 456-7890",
  },
  {
    label: "Email",
    value: "mail@example.com",
  },
  {
    label: "working days/hours",
    value: "Mon - Sun / 9:00 AM - 8:00 PM",
  },
];
