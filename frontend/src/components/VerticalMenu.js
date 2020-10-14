import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import SimpleBarReact from "simplebar-react";

const VerticalMenu = ({ location }) => {
  const [menuLinks, setMenuLinks] = useState([
    {
      label: "menu",
      id: 1,
      active: true,
      items: [
        {
          id: 1,
          label: "Dashboards",
          link: "dashboard",
          ref: useRef(null),
          type: "dropdown",
          active: true,

          hasArrow: true,
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-house"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fillRule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 2,
              label: "Default",
              link: `default`,
              active: true,
            },
            {
              id: 3,
              label: "Saas",
              link: "saas",
              active: false,
            },
            {
              id: 4,
              label: "Crypto",
              link: "crypto",
              active: false,
            },
          ],
        },
      ],
    },
    {
      label: "apps",
      id: 2,
      active: false,
      items: [
        {
          id: 1,
          label: "Calendar",
          link: "calendar",
          type: "link",
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-calendar3"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"
              />
              <path
                fillRule="evenodd"
                d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
              />
            </svg>
          ),
          submenu: [],
        },
        {
          id: 2,
          label: "Chat",
          link: "chat",
          type: "link",
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-chat-left-text"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14 1H2a1 1 0 0 0-1 1v11.586l2-2A2 2 0 0 1 4.414 11H14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
              />
              <path
                fillRule="evenodd"
                d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          ),
          submenu: [],
        },
        {
          id: 3,
          label: "Ecommerce",
          link: "ecommerce",
          type: "dropdown",
          active: false,

          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-shop-window"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Products",
              link: `products`,
              active: true,
            },
            {
              id: 2,
              label: "Product Detail",
              link: "product-detail",
              active: false,
            },
            {
              id: 3,
              label: "Orders",
              link: "orders",
              active: false,
            },
            {
              id: 4,
              label: "Customers",
              link: "customers",
              active: false,
            },
            {
              id: 5,
              label: "Cart",
              link: "cart",
              active: false,
            },
            {
              id: 6,
              label: "Checkout",
              link: "checkout",
              active: false,
            },
            {
              id: 7,
              label: "Shops",
              link: "shops",
              active: false,
            },
            {
              id: 8,
              label: "Add Product",
              link: "products/add",
              active: false,
            },
          ],
        },
        {
          id: 4,
          label: "Crypto",
          link: "crypto",
          type: "dropdown",
          hasArrow: true,
          active: false,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-wallet"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Wallet",
              link: `wallet`,
              active: true,
            },
            {
              id: 2,
              label: "Buy/Sell",
              link: "trade",
              active: false,
            },
            {
              id: 3,
              label: "Exchange",
              link: "exchange",
              active: false,
            },
            {
              id: 4,
              label: "Lending",
              link: "lending",
              active: false,
            },
            {
              id: 5,
              label: "Orders",
              link: "crypto/orders",
              active: false,
            },
            {
              id: 6,
              label: "KYC Application",
              link: "kyc",
              active: false,
            },
            {
              id: 7,
              label: "ICO Landing",
              link: "ico",
              active: false,
            },
          ],
        },
        {
          id: 5,
          label: "Email",
          link: "email",
          type: "dropdown",
          hasArrow: true,
          active: false,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-envelope"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Inbox",
              link: `inbox`,
              active: true,
            },
            {
              id: 2,
              label: "Compose",
              link: "compose",
              active: false,
            },
          ],
        },
        {
          id: 6,
          label: "Invoices",
          link: "email",
          type: "dropdown",
          hasArrow: true,
          active: false,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-card-list"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
              />
              <path
                fillRule="evenodd"
                d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z"
              />
              <circle cx="3.5" cy="5.5" r=".5" />
              <circle cx="3.5" cy="8" r=".5" />
              <circle cx="3.5" cy="10.5" r=".5" />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Invoice List",
              link: `invoice-list`,
              active: true,
            },
            {
              id: 2,
              label: "Invoice Detail",
              link: "invoice-detail",
              active: false,
            },
          ],
        },
        {
          id: 7,
          label: "Projects",
          link: "projects",
          type: "dropdown",
          hasArrow: true,
          active: false,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-briefcase"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
              />
              <path
                fillRule="evenodd"
                d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Project List",
              link: `project-list`,
              active: true,
            },
            {
              id: 2,
              label: "Project Detail",
              link: "project-detail",
              active: false,
            },
            {
              id: 3,
              label: "Project Overview",
              link: "project-overview",
              active: false,
            },
            {
              id: 2,
              label: "Create New",
              link: "project-new",
              active: false,
            },
          ],
        },
        {
          id: 8,
          label: "Tasks",
          link: "tasks",
          type: "dropdown",
          hasArrow: true,
          active: false,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-kanban"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M13.5 1h-11a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z"
              />
              <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z" />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Task List",
              link: `task-list`,
              active: true,
            },
            {
              id: 2,
              label: "Kanban Board",
              link: "kanban",
              active: false,
            },
            {
              id: 3,
              label: "Create Task",
              link: "create-task",
              active: false,
            },
            {
              id: 4,
              label: "Create New",
              link: "project-new",
              active: false,
            },
            {
              id: 5,
              label: "To-Do",
              link: "todo",
              active: false,
            },
          ],
        },
        {
          id: 9,
          label: "Contacts",
          link: "tasks",
          type: "dropdown",
          hasArrow: true,
          active: false,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-person-lines-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "User Grid",
              link: `user-grid`,
              active: true,
            },
            {
              id: 2,
              label: "User List",
              link: "user-list",
              active: false,
            },
            {
              id: 3,
              label: "Profile",
              link: "user-profile",
              active: false,
            },
          ],
        },
      ],
    },
    {
      label: "pages",
      id: 3,
      active: false,
      items: [
        {
          id: 300,
          label: "Authentication",
          link: "auth",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-person-circle"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z" />
              <path fillRule="evenodd" d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Login",
              link: `login`,
              active: true,
            },
            {
              id: 2,
              label: "Register",
              link: "register",
              active: false,
            },
            {
              id: 3,
              label: "Forgot Password",
              link: "password-reset",
              active: false,
            },
            {
              id: 4,
              label: "Lock",
              link: "lock-screeen",
              active: false,
            },
          ],
        },
        {
          id: 301,
          label: "Utility",
          link: "utility",
          type: "dropdown",
          hasArrow: true,
          active: false,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-file-earmark-richtext"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
              <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
              <path
                fillRule="evenodd"
                d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708l1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Starter Page",
              link: `starter-page`,
              active: false,
            },
            {
              id: 2,
              label: "Maintenance",
              link: "maintenance",
              active: false,
            },
            {
              id: 3,
              label: "Coming Soon",
              link: "coming-soon",
              active: false,
            },
            {
              id: 4,
              label: "Timeline",
              link: "timeline",
              active: false,
            },
            {
              id: 5,
              label: "FAQs",
              link: "faqs",
              active: false,
            },
            {
              id: 6,
              label: "Pricing",
              link: "pricing",
              active: false,
            },
            {
              id: 7,
              label: "Error 404",
              link: "error_404",
              active: false,
            },
            {
              id: 7,
              label: "Error 500",
              link: "error_500",
              active: false,
            },
          ],
        },
      ],
    },
    {
      label: "Components",
      id: 4,
      active: false,
      items: [
        {
          id: 401,
          label: "UI Elements",
          link: "ui",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-ui-radios"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zM0 12a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm7-1.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z" />
              <path
                fillRule="evenodd"
                d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zM3 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 4.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Alerts",
              link: `ui-alerts`,
              active: true,
            },
            {
              id: 2,
              label: "Buttons",
              link: "ui-buttons",
              active: false,
            },
            {
              id: 3,
              label: "Cards",
              link: "ui-cards",
              active: false,
            },
            {
              id: 4,
              label: "Carousel",
              link: "ui-carousel",
              active: false,
            },
            {
              id: 5,
              label: "Dropdowns",
              link: "ui-dropdwon",
              active: false,
            },
            {
              id: 6,
              label: "Grid",
              link: "ui-grid",
              active: false,
            },
            {
              id: 7,
              label: "Images",
              link: "ui-images",
              active: false,
            },
            {
              id: 8,
              label: "Lightbox",
              link: "ui-lightbox",
              active: false,
            },
            {
              id: 9,
              label: "Modals",
              link: "ui-modals",
              active: false,
            },
            {
              id: 10,
              label: "Range Slider",
              link: "ui-range-slider",
              active: false,
            },
            {
              id: 11,
              label: "Session Timeout",
              link: "ui-session-timeout",
              active: false,
            },
            {
              id: 12,
              label: "Progress Bars",
              link: "ui-progress-bars",
              active: false,
            },
            {
              id: 13,
              label: "Sweet-Alert",
              link: "ui-sweet-alert",
              active: false,
            },
            {
              id: 13,
              label: "Tabs & Accordions",
              link: "ui-tabs-accordions",
              active: false,
            },
            {
              id: 14,
              label: "Typography",
              link: "ui-typography",
              active: false,
            },
            {
              id: 15,
              label: "Video",
              link: "ui-video",
              active: false,
            },
            {
              id: 16,
              label: "General",
              link: "ui-general",
              active: false,
            },
            {
              id: 17,
              label: "Colors",
              link: "ui-colors",
              active: false,
            },
            {
              id: 18,
              label: "Rating",
              link: "ui-rating",
              active: false,
            },
            {
              id: 19,
              label: "Notifications",
              link: "ui-notifications",
              active: false,
            },
            {
              id: 20,
              label: "Image Cropper",
              link: "ui-image-cropper",
              active: false,
            },
          ],
        },
        {
          id: 402,
          label: "Forms",
          link: "forms",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-back"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Form Elements",
              link: `form-elements`,
              active: false,
            },
            {
              id: 2,
              label: "Form Validation",
              link: `form-validation`,
              active: false,
            },
            {
              id: 3,
              label: "Form Advanced",
              link: `form-advanced`,
              active: false,
            },
            {
              id: 4,
              label: "Form Editors",
              link: `form-editors`,
              active: false,
            },
            {
              id: 5,
              label: "Form File Upload",
              link: `form-file-upload`,
              active: false,
            },
            {
              id: 6,
              label: "Form Xeditable",
              link: "form-x-editable",
              active: false,
            },
            {
              id: 7,
              label: "Form Repeater",
              link: `form-repeater`,
              active: false,
            },
            {
              id: 8,
              label: "Form Wizard",
              link: `form-wizard`,
              active: false,
            },
            {
              id: 9,
              label: "Form Mask",
              link: `form-mask`,
              active: false,
            },
          ],
        },
        {
          id: 403,
          label: "Tables",
          link: "tables",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-table"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Basic Tables",
              link: `basic-tables`,
              active: false,
            },
            {
              id: 2,
              label: "Data Tables",
              link: `data-tables`,
              active: false,
            },
            {
              id: 3,
              label: "Responsive Table",
              link: `responsive-table`,
              active: false,
            },
            {
              id: 4,
              label: "Editable Tables",
              link: `editable-table`,
              active: false,
            },
          ],
        },
        {
          id: 404,
          label: "Charts",
          link: "charts",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-bar-chart"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 11H2v3h2v-3zm5-4H7v7h2V7zm5-5h-2v12h2V2zm-2-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zM6 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm-5 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Apex charts",
              link: "apex-charts",
              active: false,
            },
            {
              id: 2,
              label: "Chartist Chart",
              link: `chartist-charts`,
              active: false,
            },
            {
              id: 3,
              label: "Chartjs Charts",
              link: `chartjs`,
              active: false,
            },
            {
              id: 4,
              label: "E Chart",
              link: `e-chart`,
              active: false,
            },
            {
              id: 5,
              label: "Toast UI Chart",
              link: `toast-ui-chart`,
              active: false,
            },
            {
              id: 6,
              label: "Sparkline Chart",
              link: `sparkline-chart`,
              active: false,
            },
            {
              id: 7,
              label: "Knob Chart",
              link: `knob-chart`,
              active: false,
            },
          ],
        },
        {
          id: 405,
          label: "Icons",
          link: "icons",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-app-indicator"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"
              />
              <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Boxicons",
              link: "boxicons",
              active: false,
            },
            {
              id: 2,
              label: "Material Design",
              link: `material-icons`,
              active: false,
            },
            {
              id: 3,
              label: "Dripicons",
              link: `dripicons`,
              active: false,
            },
            {
              id: 4,
              label: "Font awesome",
              link: `fontawesome`,
              active: false,
            },
          ],
        },
        {
          id: 406,
          label: "Maps",
          link: "maps",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-geo-alt"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.166 8.94C12.696 7.867 13 6.862 13 6A5 5 0 0 0 3 6c0 .862.305 1.867.834 2.94.524 1.062 1.234 2.12 1.96 3.07A31.481 31.481 0 0 0 8 14.58l.208-.22a31.493 31.493 0 0 0 1.998-2.35c.726-.95 1.436-2.008 1.96-3.07zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
              />
              <path
                fillRule="evenodd"
                d="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Google Maps",
              link: "google-maps",
              active: false,
            },
            {
              id: 2,
              label: "Vector Maps",
              link: `vector-maps`,
              active: false,
            },
            {
              id: 3,
              label: "Leaflet Maps",
              link: `leaflet-maps`,
              active: false,
            },
          ],
        },
        {
          id: 407,
          label: "Multi Level",
          link: "multi-level",
          type: "dropdown",
          active: false,
          hasArrow: true,
          ref: useRef(null),
          icon: (
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-share-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"
              />
            </svg>
          ),
          submenu: [
            {
              id: 1,
              label: "Level 1.1",
              link: "level-1-1",
              active: false,
            },
            {
              id: 2,
              label: "Level 1.2",
              link: `level 1.2`,
              active: false,
              hasArrow: true,
              type: "dropdown",
              ref: useRef(null),
              submenu: [
                { id: 1, label: "Level 2.1", link: "level2-1", active: false },
                { id: 2, label: "Level 2.2", link: "level2-2", active: false },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    <aside className="vertical-menu h-80">
      <div className="h-100">
        <SimpleBarReact style={{ maxHeight: "100%" }}>
          <div id="sidebar-menu">
            <ul className="metismenu">
              {menuLinks.map((category, index) => (
                <>
                  <li key={index} className="menu-title">
                    {category.label}
                  </li>
                  {/* <li
                    key={category.id + Math.random() * 2342 + index}
                    className={` ${category.active ? "mm-active" : ""}`}
                  > */}
                  {category.items.map((innerItem) => (
                    <>
                      {innerItem.submenu.length > 0 ? (
                        <li
                          className={`hoverable ${
                            category.active ? "mm-active" : ""
                          }`}
                        >
                          <a
                            href="#"
                            className={` with-arrow waves-effect ${
                              innerItem.active ? "mm-active" : ""
                            }`}
                            aria-expanded="false"
                            ref={innerItem.ref}
                            onClick={(e) => {
                              e.preventDefault();
                              try {
                                innerItem.ref.current.nextSibling.classList.toggle(
                                  "mm-show"
                                );
                                innerItem.ref.current.classList.toggle(
                                  "mm-active"
                                );
                              } catch {}
                              setMenuLinks((state) => {
                                // loop through the current state
                                const links = state.map((el) => {
                                  // el === category
                                  el.items.map((item) => {
                                    if (item.id === innerItem.id) {
                                      item.active = !innerItem.active;
                                      console.log(item);
                                    } else {
                                      item.active = false;
                                    }
                                    return item;
                                  });
                                  return el;
                                });
                                return links;
                              });
                            }}
                          >
                            <span className="inner-icon">
                              {innerItem.icon}{" "}
                            </span>
                            <span> {innerItem.label} </span>
                            {innerItem.hasArrow && (
                              <span className="arrow">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="black"
                                  width="18px"
                                  height="18px"
                                >
                                  <path d="M0 0h24v24H0z" fill="none" />
                                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                </svg>
                              </span>
                            )}
                          </a>

                          <ul
                            className={`sub-menu mm-collapse ${
                              innerItem.active ? "mm-show" : ""
                            }`}
                            aria-expanded="false"
                          >
                            {innerItem.submenu.map((el, index) => (
                              <>
                                {!el.submenu ? (
                                  <li
                                    className={
                                      el.active && innerItem.active
                                        ? "mm-active"
                                        : ""
                                    }
                                  >
                                    <NavLink
                                      to={`${el.link}`}
                                      activeClassName="mm-active"
                                    >
                                      {el.label}
                                    </NavLink>
                                  </li>
                                ) : (
                                  <>
                                    {el.submenu.length > 0 && (
                                      <li
                                        className={
                                          el.active && innerItem.active
                                            ? "mm-active"
                                            : ""
                                        }
                                      >
                                        <a
                                          href="#"
                                          className={`with-arrow ${
                                            el.active ? "mm-active" : ""
                                          }`}
                                          aria-expanded="false"
                                          ref={el.ref}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            try {
                                              el.ref.current.nextSibling.classList.toggle(
                                                "mm-show"
                                              );
                                              el.ref.current.classList.toggle(
                                                "mm-active"
                                              );
                                            } catch {}
                                            setMenuLinks((state) => {
                                              // loop through the current state
                                              const links = state.map((el) => {
                                                // el === category
                                                el.items.map((b) => {
                                                  if (b.submenu) {
                                                    b.submenu.map((x) => {
                                                      if (x.submenu) {
                                                        x.submenu.map((e) => {
                                                          if (x.id === e.id) {
                                                            x.active = !x.active;
                                                          }
                                                        });
                                                      }
                                                    });
                                                  }
                                                  return b;
                                                });

                                                return el;
                                              });
                                              return links;
                                            });
                                          }}
                                        >
                                          {" "}
                                          {el.label}{" "}
                                          {el.hasArrow && (
                                            <span className="arrow">
                                              <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="black"
                                                width="18px"
                                                height="18px"
                                              >
                                                <path
                                                  d="M0 0h24v24H0z"
                                                  fill="none"
                                                />
                                                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                                              </svg>
                                            </span>
                                          )}
                                        </a>
                                        {el.submenu.length > 0 && (
                                          <ul
                                            className={`sub-menu mm-collapse ${
                                              el.active ? "mm-show" : ""
                                            }`}
                                          >
                                            {el.submenu.map(
                                              (submenuItem, index) => (
                                                <li
                                                  key={index}
                                                  className={
                                                    submenuItem.active &&
                                                    innerItem.active
                                                      ? "mm-active"
                                                      : ""
                                                  }
                                                >
                                                  <NavLink
                                                    to={submenuItem.link}
                                                    activeClassName="mm-active"
                                                  >
                                                    {submenuItem.label}
                                                  </NavLink>
                                                </li>
                                              )
                                            )}
                                          </ul>
                                        )}
                                      </li>
                                    )}
                                  </>
                                )}
                              </>
                            ))}
                          </ul>
                        </li>
                      ) : (
                        <li>
                          <NavLink
                            to={innerItem.link}
                            ref={innerItem.ref}
                            activeClassName="mm-active"
                          >
                            <span className="inner-icon">
                              {innerItem.icon}{" "}
                            </span>
                            <span> {innerItem.label} </span>
                          </NavLink>
                        </li>
                      )}
                    </>
                  ))}
                  {/* </li> */}
                </>
              ))}
            </ul>
          </div>
        </SimpleBarReact>
      </div>
    </aside>
  );
};

export default VerticalMenu;
