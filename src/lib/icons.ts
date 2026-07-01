import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Ambulance,
  ArrowRight,
  Award,
  Bandage,
  BookOpen,
  Brain,
  BriefcaseMedical,
  Building2,
  CalendarCheck,
  Check,
  CircleCheck,
  Clock,
  Cross,
  Eye,
  Facebook,
  Globe,
  GraduationCap,
  HandHeart,
  HeartPulse,
  Hospital,
  Info,
  Layers,
  MapPin,
  Menu,
  Microscope,
  Music2,
  OctagonAlert,
  Phone,
  PhoneCall,
  Pill,
  Plane,
  RotateCcw,
  Route,
  Scan,
  Send,
  ShieldCheck,
  Star,
  Stethoscope,
  Syringe,
  TriangleAlert,
  UserRound,
  Users,
  X,
} from "lucide-react";

export type IconCategory = "medical" | "classic";

export interface PickerIcon {
  id: string;
  label: string;
  category: IconCategory;
  icon: LucideIcon;
}

/** 30 icônes proposées dans le backoffice (15 médicales + 15 classiques). */
export const PICKER_ICONS: PickerIcon[] = [
  { id: "stethoscope", label: "Stéthoscope", category: "medical", icon: Stethoscope },
  { id: "heart-pulse", label: "Pouls", category: "medical", icon: HeartPulse },
  { id: "briefcase-medical", label: "Mallette médicale", category: "medical", icon: BriefcaseMedical },
  { id: "hospital", label: "Hôpital", category: "medical", icon: Hospital },
  { id: "microscope", label: "Microscope", category: "medical", icon: Microscope },
  { id: "scan", label: "Imagerie", category: "medical", icon: Scan },
  { id: "activity", label: "Activité", category: "medical", icon: Activity },
  { id: "pill", label: "Médicament", category: "medical", icon: Pill },
  { id: "syringe", label: "Seringue", category: "medical", icon: Syringe },
  { id: "bandage", label: "Pansement", category: "medical", icon: Bandage },
  { id: "ambulance", label: "Ambulance", category: "medical", icon: Ambulance },
  { id: "cross", label: "Croix", category: "medical", icon: Cross },
  { id: "brain", label: "Cerveau", category: "medical", icon: Brain },
  { id: "eye", label: "Œil", category: "medical", icon: Eye },
  { id: "hand-heart", label: "Soins", category: "medical", icon: HandHeart },
  { id: "shield-check", label: "Confiance", category: "classic", icon: ShieldCheck },
  { id: "clock", label: "Horaires", category: "classic", icon: Clock },
  { id: "check", label: "Validé", category: "classic", icon: Check },
  { id: "circle-check", label: "Certifié", category: "classic", icon: CircleCheck },
  { id: "info", label: "Information", category: "classic", icon: Info },
  { id: "globe", label: "Monde", category: "classic", icon: Globe },
  { id: "map-pin", label: "Localisation", category: "classic", icon: MapPin },
  { id: "phone", label: "Téléphone", category: "classic", icon: Phone },
  { id: "phone-call", label: "Appel", category: "classic", icon: PhoneCall },
  { id: "send", label: "Envoi", category: "classic", icon: Send },
  { id: "graduation-cap", label: "Formation", category: "classic", icon: GraduationCap },
  { id: "layers", label: "Couches", category: "classic", icon: Layers },
  { id: "route", label: "Parcours", category: "classic", icon: Route },
  { id: "plane", label: "Voyage", category: "classic", icon: Plane },
  { id: "star", label: "Excellence", category: "classic", icon: Star },
];

const PICKER_MAP = Object.fromEntries(PICKER_ICONS.map((item) => [item.id, item.icon]));

/** Toutes les icônes rendues sur le site (picker + navigation, réseaux, etc.). */
export const ICON_MAP: Record<string, LucideIcon> = {
  ...PICKER_MAP,
  activity: Activity,
  ambulance: Ambulance,
  "arrow-right": ArrowRight,
  award: Award,
  bandage: Bandage,
  "book-open": BookOpen,
  brain: Brain,
  "briefcase-medical": BriefcaseMedical,
  "building-2": Building2,
  "calendar-check": CalendarCheck,
  check: Check,
  "circle-check": CircleCheck,
  clock: Clock,
  cross: Cross,
  eye: Eye,
  facebook: Facebook,
  globe: Globe,
  "graduation-cap": GraduationCap,
  "hand-heart": HandHeart,
  "heart-pulse": HeartPulse,
  hospital: Hospital,
  info: Info,
  layers: Layers,
  "map-pin": MapPin,
  menu: Menu,
  microscope: Microscope,
  music: Music2,
  "music-2": Music2,
  "octagon-alert": OctagonAlert,
  phone: Phone,
  "phone-call": PhoneCall,
  pill: Pill,
  plane: Plane,
  "rotate-ccw": RotateCcw,
  route: Route,
  scan: Scan,
  send: Send,
  "shield-check": ShieldCheck,
  star: Star,
  stethoscope: Stethoscope,
  syringe: Syringe,
  "triangle-alert": TriangleAlert,
  "user-round": UserRound,
  users: Users,
  x: X,
};

export type IconName = keyof typeof ICON_MAP;

export const PICKER_ICON_IDS = new Set(PICKER_ICONS.map((item) => item.id));

export function isPickerIcon(id: string): boolean {
  return PICKER_ICON_IDS.has(id);
}

export function defaultPickerIcon(): string {
  return PICKER_ICONS[0].id;
}
