"use client";
import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Link from "next/link";

export default function PrivacyPolicy() {
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
              {t("privacyPolicy.title")}
            </h1>
            <p className="text-gray-600 mb-8">
              {t("privacyPolicy.lastUpdated")}: {t("privacyPolicy.updateDate")}
            </p>

            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <section className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  {t("privacyPolicy.intro")}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t("privacyPolicy.contact")}
                </p>
              </section>

              {/* Summary */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("privacyPolicy.summaryTitle")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t("privacyPolicy.summary.personalInfoTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.summary.personalInfo")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t("privacyPolicy.summary.sensitiveInfoTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.summary.sensitiveInfo")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t("privacyPolicy.summary.thirdPartyTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.summary.thirdParty")}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg border">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {t("privacyPolicy.summary.securityTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.summary.security")}
                    </p>
                  </div>
                </div>
              </section>

              {/* Information Collection */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("privacyPolicy.informationCollection.title")}
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    {t("privacyPolicy.informationCollection.personalDataTitle")}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    {t("privacyPolicy.informationCollection.personalDataDesc")}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.dataTypes.names")}</li>
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.dataTypes.phones")}</li>
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.dataTypes.emails")}</li>
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.dataTypes.addresses")}</li>
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.dataTypes.walletAddresses")}</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-3">
                    {t("privacyPolicy.informationCollection.sensitiveDataTitle")}
                  </h3>
                  <p className="text-gray-700 mb-3">
                    {t("privacyPolicy.informationCollection.sensitiveDataDesc")}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.sensitiveTypes.government")}</li>
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.sensitiveTypes.financial")}</li>
                    <li className="text-gray-700">{t("privacyPolicy.informationCollection.sensitiveTypes.biometric")}</li>
                  </ul>
                </div>
              </section>

              {/* Information Processing */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("privacyPolicy.informationProcessing.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("privacyPolicy.informationProcessing.description")}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li className="text-gray-700">{t("privacyPolicy.informationProcessing.purposes.accountManagement")}</li>
                  <li className="text-gray-700">{t("privacyPolicy.informationProcessing.purposes.orderFulfillment")}</li>
                  <li className="text-gray-700">{t("privacyPolicy.informationProcessing.purposes.fraudPrevention")}</li>
                  <li className="text-gray-700">{t("privacyPolicy.informationProcessing.purposes.customerService")}</li>
                  <li className="text-gray-700">{t("privacyPolicy.informationProcessing.purposes.legalCompliance")}</li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("privacyPolicy.informationSharing.title")}
                </h2>
                <p className="text-gray-700 mb-4">
                  {t("privacyPolicy.informationSharing.description")}
                </p>
                
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    {t("privacyPolicy.informationSharing.thirdPartyTitle")}
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="text-gray-700"><strong>Passbase:</strong> {t("privacyPolicy.informationSharing.passbase")}</li>
                    <li className="text-gray-700"><strong>Jotform:</strong> {t("privacyPolicy.informationSharing.jotform")}</li>
                  </ul>
                </div>
              </section>

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("privacyPolicy.yourRights.title")}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      {t("privacyPolicy.yourRights.accessTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.yourRights.access")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      {t("privacyPolicy.yourRights.correctionTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.yourRights.correction")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      {t("privacyPolicy.yourRights.deletionTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.yourRights.deletion")}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800 mb-2">
                      {t("privacyPolicy.yourRights.portabilityTitle")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {t("privacyPolicy.yourRights.portability")}
                    </p>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {t("privacyPolicy.contact.title")}
                </h2>
                <div className="bg-gray-50 p-6 rounded-lg border">
                  <p className="text-gray-700 mb-2">
                    <strong>{t("privacyPolicy.contact.email")}:</strong> info@galileocapital.io
                  </p>
                  <p className="text-gray-700">
                    <strong>{t("privacyPolicy.contact.company")}:</strong> Galileo International Capital Funds SA
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