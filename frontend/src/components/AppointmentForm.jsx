import React from 'react';
import { CheckCircle, AlertCircle, User, Phone, Calendar, Clock, MapPin } from 'lucide-react';

const getTodayDateString = () => {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export default function AppointmentForm({
  formData,
  setFormData,
  formStatus,
  handleFormChange,
  handleFormSubmit,
  services,
  t,
  lang
}) {
  return (
    <section id="randevu" className="py-20 bg-slate-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">{t('formTitle')}</h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            {t('formSubtitle')}
          </p>
        </div>

        <div className="bg-slate-800/90 border border-slate-700/50 p-6 sm:p-10 rounded-3xl shadow-2xl">
          <form onSubmit={handleFormSubmit} noValidate className="space-y-6">
            
            {/* Form Status Messages */}
            {formStatus.success && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-xl flex items-center space-x-3 text-left">
                <CheckCircle className="w-6 h-6 flex-shrink-0" />
                <div>
                  <span className="font-bold">{t('formSuccess')}</span>
                  <p className="text-xs text-emerald-300/90 mt-0.5">{t('formSuccessDesc')}</p>
                </div>
              </div>
            )}

            {formStatus.error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-start space-x-3 text-left">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">{t('formErrorTitle')}</span>
                  <p className="text-xs text-red-300/90 mt-0.5">{formStatus.error}</p>
                </div>
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              
              {/* İsim */}
              <div className="text-left">
                <label htmlFor="isim" className="block text-sm font-semibold text-slate-300 mb-2">
                  {t('labelName')}
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-5 h-5 text-slate-500" />
                  <input 
                    type="text" 
                    id="isim" 
                    name="isim" 
                    required 
                    value={formData.isim}
                    onChange={handleFormChange}
                    placeholder="Ahmet Yılmaz"
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:border-orange-500 focus:outline-none text-white transition-colors"
                  />
                </div>
              </div>

              {/* Telefon */}
              <div className="text-left">
                <label htmlFor="telefon" className="block text-sm font-semibold text-slate-300 mb-2">
                  {t('labelPhone')}
                </label>
                <div className="relative">
                  <Phone className="absolute left-3.5 top-3 w-5 h-5 text-slate-500" />
                  <input 
                    type="tel" 
                    id="telefon" 
                    name="telefon" 
                    required 
                    value={formData.telefon}
                    onChange={handleFormChange}
                    placeholder="05XX XXX XX XX"
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:border-orange-500 focus:outline-none text-white transition-colors"
                  />
                </div>
              </div>

              {/* Hizmet */}
              <div className="text-left sm:col-span-2">
                <label htmlFor="hizmet" className="block text-sm font-semibold text-slate-300 mb-2">
                  {t('labelService')}
                </label>
                <select 
                  id="hizmet" 
                  name="hizmet" 
                  required 
                  value={formData.hizmet}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:border-orange-500 focus:outline-none text-white transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-slate-800 text-slate-400">{t('placeholderService')}</option>
                  {services.map(s => (
                    <option key={s.id} value={s.title} className="bg-slate-800 text-white">
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Tarih */}
              <div className="text-left">
                <label htmlFor="tarih" className="block text-sm font-semibold text-slate-300 mb-2">
                  {t('labelDate')}
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3.5 top-3 w-5 h-5 text-slate-500" />
                  <input 
                    type="date" 
                    id="tarih" 
                    name="tarih" 
                    required 
                    min={getTodayDateString()}
                    value={formData.tarih}
                    onChange={handleFormChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:border-orange-500 focus:outline-none text-white transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Saat */}
              <div className="text-left">
                <label htmlFor="saat" className="block text-sm font-semibold text-slate-300 mb-2">
                  {t('labelTime')}
                </label>
                <div className="relative">
                  <Clock className="absolute left-3.5 top-3 w-5 h-5 text-slate-500" />
                  <input 
                    type="time" 
                    id="saat" 
                    name="saat" 
                    required 
                    value={formData.saat}
                    onChange={handleFormChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:border-orange-500 focus:outline-none text-white transition-colors cursor-pointer"
                  />
                </div>
              </div>

              {/* Adres */}
              <div className="text-left sm:col-span-2">
                <label htmlFor="adres" className="block text-sm font-semibold text-slate-300 mb-2">
                  {t('labelAddress')}
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-500" />
                  <textarea 
                    id="adres" 
                    name="adres" 
                    required 
                    rows="3"
                    value={formData.adres}
                    onChange={handleFormChange}
                    placeholder={t('placeholderAddress')}
                    className="w-full pl-11 pr-4 py-3 bg-slate-900/60 border border-slate-700 rounded-xl focus:border-orange-500 focus:outline-none text-white transition-colors"
                  ></textarea>
                </div>
              </div>

            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={formStatus.submitting}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none disabled:opacity-70 disabled:hover:translate-y-0 disabled:cursor-not-allowed"
              >
                {formStatus.submitting ? (lang === 'tr' ? 'Randevu Kaydediliyor...' : 'Saving Appointment...') : t('btnSubmit')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
