export interface LandingPage {
  id:  number;
  acf: Acf;
}

export interface WordPressPage {
  id: number;
  acf: Acf;
}

export interface Acf {
  header: Header;
  body:   Body;
  footer: Footer;
}

export interface Body {
  hero_image: HeroImage;
  row_1:      Row1;
  row_2:      Row2;
}

export interface HeroImage {
  desktop_image: Image;
  mobile_image:  Image;
}

export interface Image {
  ID:          number;
  id:          number;
  title:       string;
  filename:    string;
  filesize:    number;
  url:         string;
  link:        string;
  alt:         string;
  author:      string;
  description: string;
  caption:     string;
  name:        string;
  status:      string;
  uploaded_to: number;
  date:        Date;
  modified:    Date;
  menu_order:  number;
  mime_type:   string;
  type:        string;
  subtype:     string;
  icon:        string;
  width:       number;
  height:      number;
  sizes:       Sizes;
}

export interface Sizes {
  thumbnail:             string;
  "thumbnail-width":     number;
  "thumbnail-height":    number;
  medium:                string;
  "medium-width":        number;
  "medium-height":       number;
  medium_large:          string;
  "medium_large-width":  number;
  "medium_large-height": number;
  large:                 string;
  "large-width":         number;
  "large-height":        number;
  "1536x1536":           string;
  "1536x1536-width":     number;
  "1536x1536-height":    number;
  "2048x2048":           string;
  "2048x2048-width":     number;
  "2048x2048-height":    number;
}

export interface Row1 {
  title:      string;
  image_tile: Row1_ImageTile[];
}

export interface Row1_ImageTile {
  image:       Image;
  title:       string;
  description: string;
}

export interface Row2 {
  title:      string;
  image_tile: Row2_ImageTile[];
}

export interface Row2_ImageTile {
  image: Image;
  title: string;
}

export interface Footer {
  footer_title:  string;
  contact_links: ContactLink[];
}

export interface ContactLink {
  item: Item;
}

export interface Item {
  title:  string;
  url:    string;
  target: string;
}

export interface Header {
  company_name: string;
  menu_items:   ContactLink[];
}

// API Response types
export interface ApiResponse<T> {
  data: T | null;
  error: string | null;
}

// Component Props types
export interface HeroProps {
  data?: HeroImage;
}

export interface ReliableProps {
  data?: Row1;
}

export interface FirstClassProps {
  data?: Row2;
}

export interface HeaderProps {
  data?: Header;
}

export interface FooterProps {
  data?: Footer;
}
