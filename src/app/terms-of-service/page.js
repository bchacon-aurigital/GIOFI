"use client";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Link from "next/link";

export default function TermsOfService() {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={i18n}>
      <div className="min-h-screen bg-gray-50">
        <LanguageSwitcher />
        
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-start">
              <Link href="/">
                <img
                  src="/assets/fonts/FooterLogo.svg"
                  alt="GIOFI"
                  className="h-16 w-auto"
                />
              </Link>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm border p-8 md:p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t("termsOfService.title")}
            </h1>
            <p className="text-gray-600 mb-8">
              {t("termsOfService.lastUpdated")}: {t("termsOfService.updateDate")}
            </p>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {t("termsOfService.intro")}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t("termsOfService.agreement")}
                </p>
              </section>

              {/* Our Services */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.services.title")}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <p className="text-gray-700 mb-4">
                    {t("termsOfService.services.description")}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li className="text-gray-700">{t("termsOfService.services.types.cryptocurrency")}</li>
                    <li className="text-gray-700">{t("termsOfService.services.types.transfers")}</li>
                    <li className="text-gray-700">{t("termsOfService.services.types.escrow")}</li>
                    <li className="text-gray-700">{t("termsOfService.services.types.exchange")}</li>
                  </ul>
                </div>
              </section>

              {/* User Obligations */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.userObligations.title")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {t("termsOfService.userObligations.ageRequirement.title")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("termsOfService.userObligations.ageRequirement.description")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {t("termsOfService.userObligations.accuracy.title")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("termsOfService.userObligations.accuracy.description")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {t("termsOfService.userObligations.compliance.title")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("termsOfService.userObligations.compliance.description")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      {t("termsOfService.userObligations.security.title")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("termsOfService.userObligations.security.description")}
                    </p>
                  </div>
                </div>
              </section>

              {/* Transaction Process */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.transactionProcess.title")}
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {t("termsOfService.transactionProcess.step1.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("termsOfService.transactionProcess.step1.description")}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {t("termsOfService.transactionProcess.step2.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("termsOfService.transactionProcess.step2.description")}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {t("termsOfService.transactionProcess.step3.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("termsOfService.transactionProcess.step3.description")}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      {t("termsOfService.transactionProcess.step4.title")}
                    </h3>
                    <p className="text-gray-700">
                      {t("termsOfService.transactionProcess.step4.description")}
                    </p>
                  </div>
                </div>
              </section>

              {/* Risks and Disclaimers */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.risks.title")}
                </h2>
                <div className="bg-gray-50 border p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="w-6 h-6 text-gray-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">
                        {t("termsOfService.risks.warning")}
                      </h3>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li className="text-gray-700">• {t("termsOfService.risks.items.volatility")}</li>
                        <li className="text-gray-700">• {t("termsOfService.risks.items.regulatory")}</li>
                        <li className="text-gray-700">• {t("termsOfService.risks.items.technical")}</li>
                        <li className="text-gray-700">• {t("termsOfService.risks.items.irreversible")}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Fees and Payments */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.fees.title")}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-4">
                    {t("termsOfService.fees.description")}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li className="text-gray-700">{t("termsOfService.fees.structure.percentage")}</li>
                    <li className="text-gray-700">{t("termsOfService.fees.structure.variableRates")}</li>
                    <li className="text-gray-700">{t("termsOfService.fees.structure.transparency")}</li>
                    <li className="text-gray-700">{t("termsOfService.fees.structure.paymentMethods")}</li>
                  </ul>
                </div>
              </section>

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.liability.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("termsOfService.liability.description")}
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <p className="text-gray-900 text-sm font-medium mb-2">
                    {t("termsOfService.liability.limitationAmount")}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {t("termsOfService.liability.exceptions")}
                  </p>
                </div>
              </section>

              {/* Governing Law */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.governingLaw.title")}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <p className="text-gray-900">
                    {t("termsOfService.governingLaw.jurisdiction")}
                  </p>
                  <p className="text-gray-700 text-sm mt-2">
                    {t("termsOfService.governingLaw.disputes")}
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("termsOfService.contact.title")}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <p className="text-gray-700 mb-2">
                    <strong>{t("termsOfService.contact.questions")}</strong>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>{t("termsOfService.contact.email")}:</strong> info@galileocapital.io
                  </p>
                  <p className="text-gray-700">
                    <strong>{t("termsOfService.contact.company")}:</strong> Galileo International Capital Funds SA
                  </p>
                </div>
              </section>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-400">
              © 2024 GIOFI - Galileo International Capital Funds SA. {t("common.allRightsReserved")}
            </p>
          </div>
        </footer>
      </div>
    </I18nextProvider>
  );
}