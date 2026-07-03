// ==UserScript==
// @name         Job Autofill - Sharok
// @namespace    job-autofill
// @version      1.1.0
// @description  Autofill common job application fields, including native and custom dropdowns.
// @match        *://*/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(() => {
  const profile = {
    firstName: "Sharok",
    lastName: "N",
    fullName: "Sharok N",
    email: "sharukhahamed23@gmail.com",
    phone: "+917904649623",
    altPhone: "",
    linkedin: "https://www.linkedin.com/in/sharok-n-92b31b21b/",
    github: "https://github.com/sharok23",
    portfolio: "https://sharok23.github.io/Portfolio/",
    website: "",
    currentLocation: "Idukki, kerala, India",
    fullAddress: "Inshaf Manzil Valiyakandam",
    city: "Idukki",
    state: "Kerala",
    zip: "685509",
    country: "India",
    nationality: "Indian",
    currentJobTitle: "Software Engineer 1",
    currentCompany: "Edstem Technologies",
    currentlyWorking: "Yes",
    currentCompanyLocation: "Infopark Kochi",
    jobStartDate: "06/02/2023",
    jobStartMonth: "February",
    jobStartYear: "2023",
    totalExperience: "3.5",
    experienceYears: "3.5",
    currentSalary: "400000",
    expectedSalary: "1000000",
    noticePeriod: "15 days",
    availability: "Immediately",
    willingToRelocate: "Yes",
    highestQualification: "Bachelor of Technology",
    course: "Bachelor of Technology",
    fieldOfStudy: "Computer Science",
    branch: "Computer Science",
    college: "Ilahia College of Engineering and Technology",
    university: "Kerala Technological University",
    educationLocation: "Muvattupuzha, Ernakulam",
    courseStartDate: "01/07/2017",
    courseStartMonth: "July",
    courseStartYear: "2017",
    courseEndDate: "01/08/2021",
    courseEndMonth: "August",
    courseEndYear: "2021",
    graduationYear: "2021",
    skills: "Java, Spring Boot, PostgreSQL, Kafka, Docker, REST APIs, AWS S3, OpenSearch, DynamoDB, Maven, Git, JUnit, Mockito",
    languages: "English, Tamil, Malayalam",
    resumeUrl: "https://drive.google.com/file/d/1MnF02rdTdUMRNFdN4LwVlVBApvljbPwO/view?usp=drive_link",
    coverLetterUrl: "https://drive.google.com/file/d/19pE4uwIC9LneyUBCI5j0YkSdiuvWn26N/view?usp=drive_link",
    coverLetter: "I am writing to express my interest in the Software Engineer position at your organization. With over three years of experience in Java backend development and a strong foundation in cloud technologies, distributed systems, and AI-powered applications, I am excited about the opportunity to contribute to your team.\n\nCurrently, I work as a Software Engineer at Edstem Technologies, where I design and develop scalable backend systems using Java, Spring Boot, PostgreSQL, Kafka, Elasticsearch, AWS, and Docker. My experience includes building RESTful APIs, implementing event-driven architectures, optimizing application performance, and developing solutions that support large-scale business operations.\n\nOne of my key projects involved developing backend services for an AI-powered resume processing platform. I designed Kafka-based processing pipelines, implemented data validation and transformation workflows, integrated AI-driven resume parsing, and improved overall system throughput. Through this work, I gained practical experience in AI-powered systems, data processing, and scalable application design.\n\nI have also worked as a Technical Consultant for Elsevier's Person Hub project, where I developed enterprise-grade APIs managing millions of records, integrated external services, and delivered high-performance solutions while maintaining strict service-level requirements. Additionally, I contributed to building large-scale data export solutions on AWS, processing millions of records efficiently and reliably.\n\nAlongside my software engineering experience, I have developed strong knowledge of AI and Large Language Model (LLM) technologies. I hold certifications in Azure AI Fundamentals, Agentic AI, LangChain for LLM Application Development, and Claude Code. I am passionate about leveraging AI, automation, and modern software engineering practices to solve complex business problems and create impactful solutions.\n\nI am a quick learner, a collaborative team player, and someone who enjoys taking ownership of challenging technical problems. I am eager to contribute my skills, continue growing as an engineer, and help build innovative products that deliver value to users and businesses alike.\n\nThank you for your time and consideration. I look forward to the opportunity to discuss how my experience and technical skills can contribute to your organization.",
    roleExplanation: "As a Software Engineer with 3.5 years of experience, I developed and maintained enterprise-grade applications using Java, Spring Boot, and Microservices, ensuring high performance, scalability, and reliability. I designed and implemented RESTful APIs for seamless client-server communication and collaborated with cross-functional teams to deliver robust software solutions following industry best practices. I optimized database operations using Spring Data JPA, Hibernate, and PostgreSQL, improving application performance and data management. I wrote unit and integration tests using JUnit and Mockito to ensure code quality and application stability. Additionally, I worked with Apache Kafka to build event-driven applications and used Docker for containerized deployments, enabling consistent development and efficient application delivery. I actively participated in code reviews, bug fixing, and performance optimization to continuously improve application quality.",
    whyThisRole: "I am passionate about this role because it aligns with my skills and career goals.",
    whyThisCompany: "I admire your company's mission and innovative work in the industry.",
    strengths: "Problem-solving, quick learning, teamwork, and strong communication.",
    achievements: "Led a team to deliver a critical project ahead of schedule.",
    gender: "Male",
    dateOfBirth: "1999-02-23",
    visaStatus: "Authorized to work",
    source: "LinkedIn"
  };

  const fieldMap = {
    firstName: ["first name", "firstname", "given name", "first"],
    lastName: ["last name", "lastname", "surname", "family name", "last"],
    fullName: ["full name", "candidate name", "applicant name", "name"],
    email: ["email", "e-mail", "email address"],
    phone: ["phone", "mobile", "contact number", "telephone", "mobile number", "phone number"],
    altPhone: ["alternate phone", "alternative phone"],
    linkedin: ["linkedin", "linked in", "linkedin profile", "linkedin url"],
    github: ["github", "git hub"],
    portfolio: ["portfolio", "portfolio url"],
    website: ["website", "personal site", "url"],
    currentLocation: ["current location", "location"],
    fullAddress: ["address", "street address", "current address"],
    city: ["city"],
    state: ["state", "province"],
    zip: ["zip", "postal", "pin code", "pincode"],
    country: ["country"],
    nationality: ["nationality"],
    currentJobTitle: ["current title", "job title", "designation", "current role", "current position", "position title"],
    currentCompany: ["current company", "company name", "employer", "organization", "current employer", "company"],
    currentlyWorking: ["currently working", "i currently work here", "present employer", "current employment", "till date", "present"],
    currentCompanyLocation: ["company location", "work location", "job location", "office location", "employment location"],
    jobStartDate: ["date of joining", "joining date", "start date", "employment start date", "job start date", "from date"],
    jobStartMonth: ["joining month", "start month", "from month"],
    jobStartYear: ["joining year", "start year", "from year"],
    totalExperience: ["total experience", "overall experience", "work experience"],
    experienceYears: ["years of experience", "experience years", "relevant experience"],
    currentSalary: ["current salary", "current ctc"],
    expectedSalary: ["expected salary", "expected ctc", "desired salary"],
    noticePeriod: ["notice period"],
    availability: ["availability", "start date", "available"],
    willingToRelocate: ["relocate", "relocation"],
    highestQualification: ["highest qualification", "degree", "education"],
    course: ["course", "degree course", "qualification", "program", "programme"],
    fieldOfStudy: ["field of study", "major", "specialization"],
    branch: ["branch", "stream", "department", "specialization"],
    college: ["college", "institute", "institution", "school name", "college name"],
    university: ["university", "affiliated university", "board"],
    educationLocation: ["education location", "college location", "institute location", "campus location"],
    courseStartDate: ["course start date", "education start date", "start course", "course from date", "education from date"],
    courseStartMonth: ["course start month", "education start month", "from month"],
    courseStartYear: ["course start year", "education start year", "from year"],
    courseEndDate: ["course end date", "education end date", "ended", "end course", "course to date", "education to date"],
    courseEndMonth: ["course end month", "education end month", "to month"],
    courseEndYear: ["course end year", "education end year", "to year"],
    graduationYear: ["graduation year", "passing year", "passed out year"],
    skills: ["skills", "technologies"],
    languages: ["languages"],
    resumeUrl: ["resume url", "cv url", "resume link", "cv link"],
    coverLetterUrl: ["cover letter url", "cover letter link", "covering letter url", "covering letter link"],
    coverLetter: ["cover letter", "covering letter", "message to hiring", "additional information", "application message"],
    roleExplanation: ["explain about role", "explain your role", "describe your role", "current role description", "job responsibilities", "roles and responsibilities", "describe your responsibilities", "work experience summary", "professional summary", "profile summary", "summary about your experience", "about your experience", "about you"],
    whyThisRole: ["why this role", "why are you interested", "why are you interested in this role", "why do you want this role"],
    whyThisCompany: ["why this company"],
    strengths: ["strengths"],
    achievements: ["achievements", "accomplishments"],
    gender: ["gender"],
    dateOfBirth: ["date of birth", "dob", "birth date"],
    visaStatus: ["visa", "work authorization", "authorized to work"],
    source: ["source", "how did you hear"]
  };

  const norm = value => String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

  const escapeSelector = value => {
    if (window.CSS && CSS.escape) return CSS.escape(value);
    return String(value).replace(/["\\]/g, "\\$&");
  };

  const trigger = element => {
    for (const type of ["input", "change", "blur"]) {
      element.dispatchEvent(new Event(type, { bubbles: true }));
    }
  };

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

  const setNativeValue = (element, value) => {
    const prototype = element instanceof HTMLTextAreaElement
      ? HTMLTextAreaElement.prototype
      : HTMLInputElement.prototype;
    const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");
    if (descriptor && descriptor.set) {
      descriptor.set.call(element, value);
    } else {
      element.value = value;
    }
  };

  const textFor = element => {
    const parts = [
      element.name,
      element.id,
      element.placeholder,
      element.title,
      element.innerText,
      element.getAttribute("aria-label"),
      element.getAttribute("data-test"),
      element.getAttribute("data-testid")
    ];

    if (element.id) {
      const label = document.querySelector(`label[for="${escapeSelector(element.id)}"]`);
      if (label) parts.push(label.innerText);
    }

    const parentLabel = element.closest("label");
    if (parentLabel) parts.push(parentLabel.innerText);

    const container = element.closest("div, section, fieldset, li");
    if (container) {
      const localLabel = container.querySelector("label, legend, h2, h3, [aria-label]");
      if (localLabel) parts.push(localLabel.innerText || localLabel.getAttribute("aria-label"));
    }

    return norm(parts.filter(Boolean).join(" "));
  };

  const valueFor = text => {
    let best = null;
    let bestScore = 0;
    for (const [key, aliases] of Object.entries(fieldMap)) {
      if (!profile[key]) continue;
      for (const alias of aliases) {
        const cleanAlias = norm(alias);
        if (!cleanAlias) continue;
        const score = text === cleanAlias ? 100 : text.includes(cleanAlias) ? cleanAlias.length : 0;
        if (score > bestScore) {
          best = profile[key];
          bestScore = score;
        }
      }
    }
    return bestScore ? String(best) : "";
  };

  const dateForInput = value => {
    const match = String(value || "").match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
    if (!match) return value;
    const [, day, month, rawYear] = match;
    const year = rawYear.length === 2 ? `20${rawYear}` : rawYear;
    return `${year.padStart(4, "0")}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const monthForInput = (year, monthName) => {
    const months = {
      january: "01",
      february: "02",
      march: "03",
      april: "04",
      may: "05",
      june: "06",
      july: "07",
      august: "08",
      september: "09",
      october: "10",
      november: "11",
      december: "12"
    };
    const month = months[norm(monthName)];
    return year && month ? `${year}-${month}` : "";
  };

  const inputValueFor = element => {
    const text = textFor(element);
    const value = valueFor(text);
    if (!value) return "";
    if (element.type === "date") return dateForInput(value);
    if (element.type === "month") {
      if (text.includes("job") || text.includes("joining") || text.includes("employment")) {
        return monthForInput(profile.jobStartYear, profile.jobStartMonth);
      }
      if (text.includes("end") || text.includes("to")) {
        return monthForInput(profile.courseEndYear, profile.courseEndMonth);
      }
      return monthForInput(profile.courseStartYear, profile.courseStartMonth);
    }
    return value;
  };

  const setTextField = element => {
    const value = inputValueFor(element);
    if (!value || element.disabled || element.readOnly) return false;
    if (element.type === "file" || element.type === "hidden" || element.type === "password") return false;
    element.focus();
    setNativeValue(element, value);
    trigger(element);
    return true;
  };

  const setSelect = element => {
    const wanted = valueFor(textFor(element));
    if (!wanted || element.disabled) return false;
    const normalizedWanted = norm(wanted);
    const option = Array.from(element.options).find(item => {
      return norm(item.text).includes(normalizedWanted) ||
        normalizedWanted.includes(norm(item.text)) ||
        norm(item.value) === normalizedWanted;
    });
    if (!option) return false;
    element.value = option.value;
    trigger(element);
    return true;
  };

  const visibleText = element => norm(element?.innerText || element?.textContent || element?.getAttribute?.("aria-label"));

  const optionMatches = (option, wanted) => {
    const optionText = visibleText(option);
    const normalizedWanted = norm(wanted);
    if (!optionText || !normalizedWanted) return false;
    return optionText === normalizedWanted ||
      optionText.includes(normalizedWanted) ||
      normalizedWanted.includes(optionText);
  };

  const findOpenOption = wanted => {
    const selectors = [
      "[role='option']",
      "[role='menuitemradio']",
      "[role='menuitemcheckbox']",
      "li",
      "[data-test*='option']",
      "[data-testid*='option']"
    ];

    return Array.from(document.querySelectorAll(selectors.join(","))).find(option => {
      const rect = option.getBoundingClientRect();
      const hidden = rect.width === 0 || rect.height === 0 ||
        getComputedStyle(option).visibility === "hidden" ||
        getComputedStyle(option).display === "none";
      return !hidden && optionMatches(option, wanted);
    });
  };

  const setCustomDropdown = async element => {
    const wanted = valueFor(textFor(element));
    if (!wanted || element.disabled || element.getAttribute("aria-disabled") === "true") return false;

    element.focus();
    element.click();
    trigger(element);
    await sleep(250);

    const option = findOpenOption(wanted);
    if (!option) {
      element.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
      return false;
    }

    option.focus();
    option.click();
    trigger(option);
    trigger(element);
    return true;
  };

  const setChoice = element => {
    if (element.disabled) return false;
    const wanted = valueFor(textFor(element));
    const optionText = norm([element.value, element.closest("label")?.innerText].filter(Boolean).join(" "));
    if (!wanted || !optionText) return false;
    if (element.type === "checkbox" && ["yes", "true", "y"].includes(norm(wanted))) {
      element.checked = true;
      trigger(element);
      return true;
    }
    if (!optionText.includes(norm(wanted)) && !norm(wanted).includes(optionText)) return false;
    element.checked = true;
    trigger(element);
    return true;
  };

  const setEditable = element => {
    const value = valueFor(textFor(element));
    if (!value || element.getAttribute("aria-disabled") === "true") return false;
    element.focus();
    element.textContent = value;
    trigger(element);
    return true;
  };

  const run = async () => {
    let count = 0;

    document.querySelectorAll("input, textarea").forEach(element => {
      if (element.type === "radio" || element.type === "checkbox") {
        if (setChoice(element)) count += 1;
        return;
      }
      if (setTextField(element)) count += 1;
    });

    document.querySelectorAll("select").forEach(element => {
      if (setSelect(element)) count += 1;
    });

    document.querySelectorAll("[contenteditable='true']").forEach(element => {
      if (setEditable(element)) count += 1;
    });

    const customDropdowns = Array.from(document.querySelectorAll([
      "[role='combobox']",
      "[aria-haspopup='listbox']",
      "[aria-haspopup='menu']",
      "button[aria-expanded]",
      "div[aria-expanded]"
    ].join(","))).filter(element => {
      const tag = element.tagName.toLowerCase();
      return tag !== "select" && element.offsetParent !== null;
    });

    for (const element of customDropdowns) {
      if (await setCustomDropdown(element)) count += 1;
    }

    alert(`Job Autofill filled ${count} field${count === 1 ? "" : "s"}. Please review before submitting.`);
  };

  run();
})();
