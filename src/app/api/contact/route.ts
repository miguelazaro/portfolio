import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, message, suggestions } = await request.json();

        // Validación 
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Todos los campos son requeridos' },
                { status: 400 }
            );
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Email inválido' },
                { status: 400 }
            );
        }

        // Enviar email con Resend
        const { data, error } = await resend.emails.send({
            from: 'Portafolio <onboarding@resend.dev>', // Temporal
            to: ['miguel.lazaro.2003@gmail.com'],
            subject: `Nuevo mensaje de ${name} - Portafolio`,
            html: `
                <h2>Nuevo mensaje desde tu portafolio</h2>
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
                ${suggestions ? `
                    <hr />
                    <p><strong>💡 Sugerencias/Feedback:</strong></p>
                    <p style="background-color: #f0f9ff; padding: 12px; border-left: 3px solid #22b8cf; border-radius: 4px;">
                        ${suggestions}
                    </p>
                ` : ''}
                <hr />
                <p style="color: gray; font-size: 12px;">
                    Este mensaje fue enviado desde tu portafolio web
                </p>
            `,
        });

        if (error) {
            console.error('Error de Resend:', error);
            return NextResponse.json(
                { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, messageId: data?.id },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error enviando email:', error);
        return NextResponse.json(
            { error: 'Error al enviar el mensaje. Intenta de nuevo.' },
            { status: 500 }
        );
    }
}
