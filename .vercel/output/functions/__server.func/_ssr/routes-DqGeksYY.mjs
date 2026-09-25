import { r as __toESM } from "../_runtime.mjs";
import { t as portfolio } from "./portfolio-C-ualxk9.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { a as Mail, c as Github, d as ArrowDownRight, i as Menu, l as ArrowUp, n as Sun, o as LoaderCircle, r as Moon, s as Linkedin, t as X, u as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DqGeksYY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 24, className, as = "div" }) {
	const Component = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		initial: {
			opacity: 0,
			y
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .15,
			margin: "0px 0px -80px 0px"
		},
		transition: {
			duration: .6,
			delay,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		className,
		children
	});
}
function SectionHeading({ index, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
		y: 16,
		className: "mb-10 grid gap-3 md:grid-cols-[10rem_1fr] md:items-start",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-xs uppercase text-muted-foreground",
			children: [
				index,
				" / ",
				title
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold leading-none sm:text-4xl md:text-5xl",
			children: title
		}), description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base",
			children: description
		}) : null] })]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "01",
			title: "About"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 md:grid-cols-[10rem_1fr] md:gap-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs uppercase text-muted-foreground",
				children: "A short introduction"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl leading-tight sm:text-3xl md:text-4xl",
					children: portfolio.about.lead
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 text-sm leading-7 text-muted-foreground md:text-base",
					children: [portfolio.about.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2 pt-2",
						children: portfolio.about.interests.map((interest) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border px-3 py-1 text-xs text-foreground",
							children: interest
						}, interest))
					})]
				})]
			})]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	async function handleSubmit(event) {
		event.preventDefault();
		if (portfolio.web3FormsAccessKey.startsWith("YOUR_")) {
			setStatus("error");
			return;
		}
		setStatus("sending");
		try {
			if (!(await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: new FormData(event.currentTarget)
			})).ok) throw new Error("Submission failed");
			setStatus("success");
			event.currentTarget.reset();
		} catch {
			setStatus("error");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		className: "section-shell pb-16 md:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "05",
			title: "Let’s build something useful.",
			description: "Have an internship, research idea, or interesting engineering problem? Send a note."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:ml-[10rem] md:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: "Prefer email?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: `mailto:${portfolio.email}`,
					className: "mt-2 inline-flex items-center gap-2 border-b border-foreground pb-1 font-display text-xl",
					children: [portfolio.email, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 space-y-3",
					children: portfolio.socials.filter((social) => social.type !== "email").map((social) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: social.href,
						target: "_blank",
						rel: "noreferrer",
						className: "block text-sm text-muted-foreground hover:text-foreground",
						children: [social.label, " ↗"]
					}, social.label))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "hidden",
						name: "access_key",
						value: portfolio.web3FormsAccessKey
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "hidden",
						name: "subject",
						value: "New portfolio message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "name",
							placeholder: "Your name",
							"aria-label": "Your name",
							required: true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "email",
							name: "email",
							placeholder: "Email address",
							"aria-label": "Email address",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						name: "subject_line",
						placeholder: "What’s this about?",
						"aria-label": "Message subject",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
						name: "message",
						placeholder: "Tell me a little about your idea...",
						"aria-label": "Message",
						className: "min-h-36",
						required: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							role: "status",
							children: status === "success" ? "Message sent — thank you." : status === "error" ? "Add your Web3Forms key in the portfolio data file to enable sending." : "I’ll reply as soon as I can."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							type: "submit",
							className: "w-full shrink-0 sm:w-auto",
							disabled: status === "sending",
							children: [status === "sending" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }) : null, "Send message"]
						})]
					})
				]
			})]
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-6 text-xs text-muted-foreground md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				portfolio.name
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				className: "inline-flex items-center gap-2 hover:text-foreground",
				children: ["Back to top ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "h-3 w-3" })]
			})]
		})
	});
}
function applyTheme(theme) {
	document.documentElement.classList.toggle("dark", theme === "dark");
}
function ThemeToggle() {
	const [theme, setTheme] = (0, import_react.useState)("light");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const initial = localStorage.getItem("theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
		setTheme(initial);
		applyTheme(initial);
		setMounted(true);
	}, []);
	function toggle() {
		const next = theme === "dark" ? "light" : "dark";
		setTheme(next);
		applyTheme(next);
		localStorage.setItem("theme", next);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
		variant: "ghost",
		size: "icon",
		onClick: toggle,
		"aria-label": theme === "dark" ? "Switch to light mode" : "Switch to dark mode",
		className: "shrink-0 rounded-full border border-border",
		children: mounted && theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
	});
}
var links = [
	"About",
	"Skills",
	"Projects",
	"Experience",
	"Contact"
];
var HEADER_OFFSET = 64;
function scrollToId(id) {
	const target = document.getElementById(id);
	if (!target) return;
	const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
	window.scrollTo({
		top,
		behavior: reduce ? "auto" : "smooth"
	});
}
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const ids = [
			"about",
			"skills",
			"projects",
			"experience",
			"contact"
		];
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) setActive(entry.target.id);
			});
		}, { rootMargin: "-30% 0px -60% 0px" });
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);
	function handleNav(event, id) {
		event.preventDefault();
		setOpen(false);
		scrollToId(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#top",
				onClick: (event) => handleNav(event, "top"),
				className: "truncate font-display text-xl font-semibold",
				"aria-label": "Back to top",
				children: [portfolio.initials, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-primary",
					children: "."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 sm:gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-6 md:flex lg:gap-7",
						"aria-label": "Main navigation",
						children: links.map((link) => {
							const id = link.toLowerCase();
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `#${id}`,
								onClick: (event) => handleNav(event, id),
								"aria-current": active === id ? "true" : void 0,
								className: `relative text-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active === id ? "text-foreground" : "text-muted-foreground"}`,
								children: [link, active === id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "nav-active",
									className: "absolute -bottom-1.5 left-0 h-px w-full bg-primary"
								}) : null]
							}, link);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-1 hidden h-5 w-px bg-border md:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "shrink-0 md:hidden",
						onClick: () => setOpen((value) => !value),
						"aria-expanded": open,
						"aria-label": "Toggle menu",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {})
					})
				]
			})]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "border-t border-border bg-background px-5 py-2 md:hidden",
			"aria-label": "Mobile navigation",
			children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: `#${link.toLowerCase()}`,
				onClick: (event) => handleNav(event, link.toLowerCase()),
				className: "block border-b border-border py-3 text-sm last:border-0",
				children: link
			}, link))
		}) : null]
	});
}
var iconMap = {
	github: Github,
	linkedin: Linkedin,
	email: Mail
};
var container = {
	hidden: {},
	show: { transition: {
		staggerChildren: .12,
		delayChildren: .08
	} }
};
var item = {
	hidden: {
		opacity: 0,
		y: 20
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .7,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		className: "mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl content-between px-5 py-12 md:px-8 md:py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			variants: container,
			initial: "hidden",
			animate: "show",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: item,
					className: "flex items-center justify-between gap-3 border-b border-border pb-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs uppercase text-muted-foreground",
						children: portfolio.hero.eyebrow
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hidden shrink-0 items-center gap-2 text-xs text-muted-foreground sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-2 w-2 rounded-full bg-signal" }), portfolio.status]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
					variants: item,
					className: "mt-10 max-w-5xl font-display text-4xl font-semibold leading-[1.02] sm:text-6xl md:mt-12 md:text-7xl lg:text-8xl lg:leading-[0.96]",
					children: portfolio.hero.headline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					variants: item,
					className: "mt-10 grid gap-7 md:grid-cols-[1fr_1fr] md:items-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xl text-base leading-7 text-muted-foreground md:col-start-2 md:text-lg",
						children: portfolio.hero.intro
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 16
			},
			animate: {
				opacity: 1,
				y: 0
			},
			transition: {
				duration: .7,
				delay: .5,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "mt-16 flex flex-col justify-between gap-6 border-t border-border pt-5 sm:flex-row sm:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl font-semibold",
					children: portfolio.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: [
						portfolio.role,
						" · ",
						portfolio.location
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [portfolio.socials.map((social) => {
					const Icon = iconMap[social.type];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: social.href,
						target: social.type === "email" ? void 0 : "_blank",
						rel: "noreferrer",
						"aria-label": social.label,
						className: "grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground hover:bg-foreground hover:text-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
					}, social.label);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#about",
					className: "ml-2 inline-flex items-center gap-2 text-sm font-medium",
					children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, { className: "h-4 w-4" })]
				})]
			})]
		})]
	});
}
function ProjectCard({ project, index }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.article, {
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			amount: .2,
			margin: "0px 0px -80px 0px"
		},
		transition: {
			duration: .6,
			delay: Math.min(index, 3) * .08,
			ease: [
				.22,
				1,
				.36,
				1
			]
		},
		whileHover: { y: -4 },
		className: "group border-t border-border py-8 transition-colors duration-300 hover:border-foreground/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-6 md:grid-cols-[3rem_1.1fr_1fr] md:items-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "font-mono text-xs text-muted-foreground",
					children: ["0", index + 1]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-sm border border-border bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.image,
						alt: `${project.title} interface preview`,
						width: 1200,
						height: 760,
						loading: "lazy",
						className: "aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full min-w-0 flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold sm:text-3xl",
							children: project.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-6 text-muted-foreground",
							children: project.description
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex flex-wrap gap-2",
							children: project.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-secondary px-3 py-1 font-mono text-[11px]",
								children: tag
							}, tag))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-auto flex flex-wrap gap-5 pt-8 text-sm font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.href,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1 transition-colors hover:text-primary",
								children: [
									"View project",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
								]
							}), project.sourceHref ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: project.sourceHref,
								target: "_blank",
								rel: "noreferrer",
								className: "inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "h-4 w-4" }), " Source"]
							}) : null]
						})
					]
				})
			]
		})
	});
}
function Projects() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "projects",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "03",
			title: "Selected projects",
			description: "Experiments and tools shaped by curiosity, constraints, and many late nights in the lab."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: portfolio.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
			project,
			index
		}, project.title)) })]
	});
}
function Skills() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "02",
			title: "Skills",
			description: "A practical toolkit for building across the hardware–software boundary."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-4",
			children: portfolio.skills.map((group, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "article",
				y: 18,
				delay: Math.min(index, 4) * .08,
				className: "min-h-48 border-b border-r border-border p-5 transition-colors duration-300 hover:bg-secondary/50 sm:min-h-56 sm:p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-mono text-xs text-muted-foreground",
						children: ["0", index + 1]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-6 font-display text-xl font-semibold sm:mt-8 sm:text-2xl",
						children: group.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-2 text-sm text-muted-foreground",
						children: group.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: skill }, skill))
					})
				]
			}, group.title))
		})]
	});
}
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "section-shell",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			index: "04",
			title: "Experience & education"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "md:ml-[10rem]",
			children: portfolio.timeline.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				as: "article",
				delay: Math.min(index, 4) * .06,
				className: "grid gap-4 border-t border-border py-7 md:grid-cols-[10rem_1fr_10rem]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full border border-border px-3 py-1 font-mono text-[11px]",
							children: item.type
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-xs text-muted-foreground md:hidden",
							children: item.period
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold sm:text-2xl",
								children: item.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-sm",
								children: [
									item.organization,
									" · ",
									item.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 max-w-xl text-sm leading-6 text-muted-foreground",
								children: item.description
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hidden font-mono text-xs text-muted-foreground md:block md:text-right",
						children: item.period
					})
				]
			}, `${item.title}-${item.period}`))
		})]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { Index as component };
