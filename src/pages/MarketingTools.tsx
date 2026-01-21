
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { Mail, Megaphone, Loader2, CheckCircle2, AlertCircle, Copy } from "lucide-react";
import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG } from '@/config/email';

const MarketingTools = () => {
    // Campaign State
    const [recipients, setRecipients] = useState("");
    const [templateId, setTemplateId] = useState("");
    const [isSending, setIsSending] = useState(false);
    const [progress, setProgress] = useState(0);
    const [results, setResults] = useState<{ success: number, failed: number }>({ success: 0, failed: 0 });

    // Tracking State
    const [pixelId, setPixelId] = useState("");

    const processEmails = async () => {
        const emailList = recipients.split(/[\n,;]+/).map(e => e.trim()).filter(e => e && e.includes('@'));

        if (emailList.length === 0) {
            toast.error("Aucun email valide trouvé");
            return;
        }

        if (!templateId) {
            toast.error("Veuillez entrer un ID de template EmailJS");
            return;
        }

        setIsSending(true);
        setProgress(0);
        setResults({ success: 0, failed: 0 });

        let s = 0;
        let f = 0;

        for (let i = 0; i < emailList.length; i++) {
            const email = emailList[i];
            try {
                // Sending exact format expected by "Lead Notification" usually, but for a general campaign 
                // we might need to adjust variables. 
                // Assuming the new template just needs basic info or is static.
                // We'll pass generic params.
                await emailjs.send(
                    EMAIL_CONFIG.SERVICE_ID,
                    templateId,
                    {
                        to_email: email,
                        message: "Découvrez nos solutions d'éclairage LED.", // Generic fallback
                    },
                    EMAIL_CONFIG.PUBLIC_KEY
                );
                s++;
            } catch (error) {
                console.error(`Failed to send to ${email}`, error);
                f++;
            }

            setResults({ success: s, failed: f });
            setProgress(Math.round(((i + 1) / emailList.length) * 100));
            // Small delay to respect rate limits
            await new Promise(resolve => setTimeout(resolve, 500));
        }

        setIsSending(false);
        toast.success(`Campagne terminée : ${s} envoyés, ${f} échecs.`);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <Header />
            <main className="flex-grow container py-24">
                <div className="max-w-4xl mx-auto mb-10 text-center">
                    <Badge variant="outline" className="mb-4 border-primary/20 text-primary bg-primary/5">Admin Space</Badge>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Outils Marketing & Campagnes
                    </h1>
                    <p className="text-slate-600">
                        Centralisez vos envois d'emails et la gestion de vos publicités.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Tabs defaultValue="campaign" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-8">
                            <TabsTrigger value="campaign" className="flex items-center gap-2">
                                <Mail className="h-4 w-4" /> Campagne Emailing
                            </TabsTrigger>
                            <TabsTrigger value="ads" className="flex items-center gap-2">
                                <Megaphone className="h-4 w-4" /> Publicité & Tracking
                            </TabsTrigger>
                        </TabsList>

                        {/* EMAIL CAMPAIGN TAB */}
                        <TabsContent value="campaign">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Lancer une campagne</CardTitle>
                                    <CardDescription>
                                        Envoyez vos nouveaux templates HTML à une liste de prospects.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800 flex gap-3">
                                        <AlertCircle className="h-5 w-5 shrink-0" />
                                        <div>
                                            <strong>Important :</strong> Créez d'abord un nouveau "Template" dans votre dashboard EmailJS.
                                            Collez-y le code HTML du fichier <code>SIGNATURE_EMAIL...</code> ou <code>EMAIL_TEMPLATE...</code>,
                                            puis copiez l'ID du template ici.
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">1. ID du Template EmailJS</label>
                                        <Input
                                            placeholder="ex: template_xyz123"
                                            value={templateId}
                                            onChange={(e) => setTemplateId(e.target.value)}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium">2. Liste des destinataires</label>
                                        <Textarea
                                            placeholder="Collez ici les emails (un par ligne, ou séparés par des virgules)..."
                                            className="min-h-[150px] font-mono text-sm"
                                            value={recipients}
                                            onChange={(e) => setRecipients(e.target.value)}
                                        />
                                        <p className="text-xs text-muted-foreground">
                                            {recipients.split(/[\n,;]+/).filter(e => e.includes('@')).length} emails détectés
                                        </p>
                                    </div>

                                    {isSending && (
                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span>Progression</span>
                                                <span>{progress}%</span>
                                            </div>
                                            <Progress value={progress} className="h-2" />
                                            <div className="flex gap-4 text-sm text-muted-foreground justify-center">
                                                <span className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-green-500" /> {results.success} Envoyés</span>
                                                <span className="flex items-center gap-1"><AlertCircle className="h-4 w-4 text-red-500" /> {results.failed} Échecs</span>
                                            </div>
                                        </div>
                                    )}

                                    <Separator />

                                    <Button
                                        className="w-full"
                                        size="lg"
                                        onClick={processEmails}
                                        disabled={isSending || !templateId || !recipients}
                                    >
                                        {isSending ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Envoi en cours...
                                            </>
                                        ) : (
                                            <>
                                                <Mail className="mr-2 h-4 w-4" /> Envoyer la campagne
                                            </>
                                        )}
                                    </Button>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* ADS & TRACKING TAB */}
                        <TabsContent value="ads">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Configuration Publicitaire</CardTitle>
                                    <CardDescription>
                                        Gérez vos pixels de tracking pour Google Ads et Facebook Ads.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <div className="grid gap-4">
                                            <div className="p-4 rounded-lg border bg-slate-50">
                                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                                    <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                                                    Facebook / Meta Pixel
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Permet de tracker les conversions venant de Facebook et Instagram.
                                                </p>
                                                <div className="flex gap-2">
                                                    <Input placeholder="ID du Pixel (ex: 1234567890)" />
                                                    <Button variant="outline">Sauvegarder</Button>
                                                </div>
                                            </div>

                                            <div className="p-4 rounded-lg border bg-slate-50">
                                                <h3 className="font-semibold mb-2 flex items-center gap-2">
                                                    <span className="h-2 w-2 rounded-full bg-orange-500"></span>
                                                    Google Ads Tag
                                                </h3>
                                                <p className="text-sm text-muted-foreground mb-4">
                                                    Permet de tracker les conversions venant de la recherche Google.
                                                </p>
                                                <div className="flex gap-2">
                                                    <Input placeholder="ID de conversion (ex: AW-123456789)" />
                                                    <Button variant="outline">Sauvegarder</Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="bg-blue-50 text-blue-800 p-4 rounded-lg text-sm">
                                            <p className="flex items-start gap-2">
                                                <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                                                <span>
                                                    <strong>Note :</strong> Pour que les sauvegardes soient effectives,
                                                    je dois intégrer ces ID directement dans le code du site.
                                                    Si vous avez vos ID maintenant, donnez-les moi et je les ajoute !
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MarketingTools;
