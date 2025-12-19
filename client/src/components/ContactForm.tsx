// import { useState } from 'react';
// import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
// import { toast } from 'sonner';

// /**
//  * Contact Form Component
//  * Design: Minimalist Elegance with Geometric Precision
//  * - Clean, user-friendly form with validation
//  * - Success and error feedback
//  * - Sends to gdsolutionslat@gmail.com
//  */
// export default function ContactForm() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     title: '',
//     message: '',
//     telefono: ''
//   });

//   const [isLoading, setIsLoading] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
    
//     // Validate form
//     if (!formData.name || !formData.email || !formData.title || !formData.message || !formData.telefono) {
//       toast.error('Por favor, llena todos los campos');
//       return;
//     }

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(formData.email)) {
//       toast.error('Ingrese un correo válido');
//       return;
//     }

//     setIsLoading(true);

//     try {
//       // Simulate form submission (in a real app, this would send to a backend)
//       // For now, we'll show a success message
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       // Show success message
//       toast.success('Mensaje enviado exitósamente! Te contactaremos lo más rápido posible.');
//       setSubmitted(true);

//       // Reset form after 2 seconds
//       setTimeout(() => {
//         setFormData({ name: '', email: '', title: '', message: '', telefono: '' });
//         setSubmitted(false);
//       }, 2000);
//     } catch (error) {
//       toast.error('Error al enviar el mensaje, inténtelo de nuevo.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   if (submitted) {
//     return (
//       <div className="text-center py-12">
//         <CheckCircle className="w-16 h-16 text-[#f4832c] mx-auto mb-4" />
//         <h3 className="text-2xl font-bold text-[#083351] mb-2">Muchas Gracias!</h3>
//         <p className="text-gray-600">Hemos recibido tu mensajes, nos contactaremos pronto.</p>
//       </div>
//     );
//   }

//   return (
//     <form onSubmit={handleSubmit} className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <input
//           type="text"
//           name="name"
//           placeholder="Tu nombre"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Tu correo"
//           value={formData.email}
//           onChange={handleChange}
//           className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
//           required
//         />
//       </div>

//       <input
//         type="text"
//         name="title"
//         placeholder="Nombre de la empresa"
//         value={formData.title}
//         onChange={handleChange}
//         className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
//         required
//       />

//       <input
//         type="number"
//         name="telefono"
//         placeholder="Teléfono"
//         value={formData.telefono}
//         onChange={handleChange}
//         className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
//         required
//       />

//       <textarea
//         name="message"
//         placeholder="Cuéntanos sobre tu negocio y tus expectativas"
//         rows={6}
//         value={formData.message}
//         onChange={handleChange}
//         className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500 resize-none"
//         required
//       ></textarea>

//       <button
//         type="submit"
//         disabled={isLoading}
//         className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
//       >
//         {isLoading ? (
//           <>
//             <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//             Enviando...
//           </>
//         ) : (
//           <>
//             Enviar Mensaje
//             <ArrowRight className="w-5 h-5" />
//           </>
//         )}
//       </button>

//       <p className="text-center text-gray-600 text-sm">
//         O comunícate directamente a {' '}
//         <a href="mailto:gdsolutionslat@gmail.com" className="text-[#f4832c] hover:underline">
//           gdsolutionslat@gmail.com
//         </a>
//       </p>
//     </form>
//   );
// }


import { useState } from 'react';
import { ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

/**
 * Contact Form Component
 * Design: Minimalist Elegance with Geometric Precision
 * - Clean, user-friendly form with validation
 * - Success and error feedback
 * - Sends to gdsolutionslat@gmail.com
 */
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: '',
    telefono: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.title || !formData.message || !formData.telefono) {
      toast.error('Por favor, llena todos los campos');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Ingrese un correo válido');
      return;
    }

    setIsLoading(true);

    try {
      // Simulate form submission (in a real app, this would send to a backend)
      // For now, we'll show a success message
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      toast.success('Mensaje enviado exitósamente! Te contactaremos lo más rápido posible.');
      setSubmitted(true);

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', title: '', message: '', telefono: '' });
        setSubmitted(false);
      }, 2000);
    } catch (error) {
      toast.error('Error al enviar el mensaje, inténtelo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-[#f4832c] mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#083351] mb-2">Muchas Gracias!</h3>
        <p className="text-gray-600">Hemos recibido tu mensajes, nos contactaremos pronto.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
          required
        />
      </div>

      <input
        type="text"
        name="title"
        placeholder="Nombre de la empresa"
        value={formData.title}
        onChange={handleChange}
        className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
        required
      />

      <input
        type="number"
        name="telefono"
        placeholder="Teléfono"
        value={formData.telefono}
        onChange={handleChange}
        className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500"
        required
      />

      <textarea
        name="message"
        placeholder="Cuéntanos sobre tu negocio y tus expectativas"
        rows={6}
        value={formData.message}
        onChange={handleChange}
        className="w-full px-6 py-4 border border-[#e5e5e5] rounded-lg focus:outline-none focus:border-[#f4832c] transition-colors duration-200 text-[#083351] placeholder-gray-500 resize-none"
        required
      ></textarea>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Enviando...
          </>
        ) : (
          <>
            Enviar Mensaje
            <ArrowRight className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-center text-gray-600 text-sm">
        O comunícate directamente a {' '}
        <a href="mailto:gdsolutionslat@gmail.com" className="text-[#f4832c] hover:underline">
          gdsolutionslat@gmail.com
        </a>
      </p>
    </form>
  );
}
