$(function($){
	
	var quiz = {
		multiList: [
			{
				ques: "Actively monitoring data streams in search of malicious code or behavior is an example of:",
				ans: "content inspection",
				ansSel: ["load balancing", "an Internet proxy", "URL filtering"]
			},
			{
				ques: "Which of the following network devices would MOST likely be used to detect but not react to suspicious behavior on the network?",
				ans: "NIDS",
				ansSel: ["Firewall", "NIPS", "HIDS"]
			},
			{
				ques: "The security administrator is getting reports from users that they are accessing certain websites and are unable to download anything off of those sites. The security administrator is also receiving several alarms from the IDS about suspicious traffic on the network. Which of the following is the MOST likely cause?",
				ans: "NIPS is blocking activities from those specific websites",
				ansSel: ["NIDS is blocking activities from those specific websites", "The firewall is blocking web activity", "The router is denying all traffic from those sites"]
			},
			{
				ques: "Which of the following tools provides the ability to determine if an application is transmitting a password in clear-text?",
				ans: "Protocol analyzer",
				ansSel: ["Port scanner", "Vulnerability scanner", "Honeypot"]
			},
			{
				ques: "Which of the following can a security administrator implement to help identify smurf attacks?",
				ans: "NIDS",
				ansSel: ["Load balancer", "Spam filters", "Firewall"]
			},
			{
				ques: "Which of the following functions is MOST likely performed by a web security gateway?",
				ans: "Content filtering",
				ansSel: ["Protocol analyzer", "Spam filtering", "Flood guard"]
			},
			{
				ques: "Which of the following devices is often used to cache and filter content?",
				ans: "Proxies",
				ansSel: ["Firewall", "VPN", "Load balancer"]
			},
			{
				ques: "Which of the following devices is used to optimize and distribute data workloads across multiple computers or networks?",
				ans: "Load balancer",
				ansSel: ["URL filter", "VPN concentrator", "Protocol analyzer"]
			},
			{
				ques: "An IT administrator wants to provide 250 staff with secure remote access to the corporate network. Which of the following BEST achieves this requirement?",
				ans: "VPN concentrator",
				ansSel: ["Software based firewall", "Mandatory Access Control (MAC)", "Web security gateway"]
			},
			{
				ques: "Which of the following should be installed to prevent employees from receiving unsolicited emails?",
				ans: "Spam filters",
				ansSel: ["Pop-up blockers", "Virus definitions", "Spyware definitions"]
			},
			{
				ques: "Which of the following should a security administrator implement to prevent users from disrupting network connectivity, if a user connects both ends of a network cable to different switch ports?",
				ans: "Loop protection",
				ansSel: ["VLAN separation", "Access control", "DMZ"]
			},
			{
				ques: "A user is no longer able to transfer files to the FTP server. The security administrator has verified the ports are open on the network firewall. Which of the following should the security administrator check?",
				ans: "ACLs",
				ansSel: ["Anti-virus software", "Anti-spam software", "NIDS"]
			},
			{
				ques: "Which of the following BEST describes the proper method and reason to implement port security?",
				ans: "Apply a security control which ties specific ports to end-device MAC addresses and prevents additional devices from being connected to the network.",
				ansSel: ["Apply a security control which ties specific networks to end-device IP addresses and prevents new devices from being connected to the network.", "Apply a security control which ties specific ports to end-device MAC addresses and prevents all devices from being connected to the network.", "Apply a security control which ties specific ports to end-device IP addresses and prevents mobile devices from being connected to the network."]
			},
			{
				ques: "Which of the following would need to be configured correctly to allow remote access to the network?",
				ans: "ACLs",
				ansSel: ["Kerberos", "Tokens", "Biometrics"]
			},
			{
				ques: "By default, which of the following stops network traffic when the traffic is not identified in the firewall rule-set?",
				ans: "Implicit deny",
				ansSel: ["Access control lists", "Explicit allow", "Explicit deny"]
			},
			{
				ques: "Based on logs from file servers, remote access systems, and IDS, a malicious insider was stealing data using a personal laptop while connected by VPN. The affected company wants access to the laptop to determine loss, but the insider's lawyer insists the laptop cannot be identified. Which of the following would BEST be used to identify the specific computer used by the insider?",
				ans: "MAC address",
				ansSel: ["IP address", "User profiles", "Computer name"]
			},
			{
				ques: "Applying detailed instructions to manage the flow of network traffic at the edge of the network, including allowing or denying traffic based on port, protocol, address, or direction is an implementation of which of the following?",
				ans: "Firewall rules",
				ansSel: ["Virtualization", "Port security", "IPSec"]
			},
			{
				ques: "Which of the following is the default rule found in a corporate firewalls access control list?",
				ans: "Deny all",
				ansSel: ["Anti-spoofing", "Permit all", "Multi-cast list"]
			},
			{
				ques: "Which of the following is BEST used to prevent ARP poisoning attacks across a network?",
				ans: "VLAN segregation",
				ansSel: ["IPSec", "IP filters", "Log analysis"]
			},
			{
				ques: "A small company needs to invest in a new expensive database. The company's budget does not include the purchase of additional servers or personnel. Which of the following solutions would allow the small company to save money on hiring additional personnel and minimize the footprint in their current datacenter?",
				ans: "Software as a Service",
				ansSel: ["Allow users to telecommute", "Setup a load balancer", "Infrastructure as a Service"]
			},
			{
				ques: "Which of the following is MOST likely to be the last rule contained on any firewall?",
				ans: "Implicit deny",
				ansSel: ["IP allow any any", "Separation of duties", "Time of day restrictions"]
			},
			{
				ques: "Which of the following cloud computing concepts is BEST described as providing an easy to configure OS and on-demand computing for customers?",
				ans: "Platform as a Service",
				ansSel: ["Software as a Service", "Infrastructure as a Service", "Trusted OS as a Service"]
			},
			{
				ques: "MAC filtering is a form of which of the following?",
				ans: "Network Access Control",
				ansSel: ["Virtualization", "Virtual Private Networking", "Network Address Translation"]
			},
			{
				ques: "Reviewing an access control list on a firewall reveals a Drop All statement at the end of the rules. Which of the following describes this form of access control?",
				ans: "Implicit deny",
				ansSel: ["Discretionary", "Time of day restrictions", "Mandatory"]
			},
			{
				ques: "An administrator is taking an image of a server and converting it to a virtual instance. Which of the following BEST describes the information security requirements of a virtualized server?",
				ans: "Virtual servers have the same information security requirements as physical servers.",
				ansSel: ["Virtual servers require OS hardening but not patching or anti-virus.", "Virtual servers inherit information security controls from the hypervisor.", "Virtual servers only require data security controls and do not require licenses."]
			},
			{
				ques: "Webmail is classified under which of the following cloud-based technologies?",
				ans: "Software as a Service (SaaS)",
				ansSel: ["Demand Computing", "Infrastructure as a Service (IaaS)", "Platform as a Service (PaaS)"]
			},
			{
				ques: "A security engineer is troubleshooting a server in the DMZ, which cannot be reached from the Internet or the internal network. All other servers on the DMZ are able to communicate with this server. Which of the following is the MOST likely cause?",
				ans: "The server is missing the default gateway.",
				ansSel: ["The server is configured to reject ICMP packets.", "The server is on the external zone and it is configured for DNS only.", "The server is on the internal zone and it is configured for DHCP only."]
			},
			{
				ques: "Which of the following may cause a user, connected to a NAC-enabled network, to not be prompted for credentials?",
				ans: "The user's PC is missing the authentication agent.",
				ansSel: ["The user's PC is not fully patched.", "The user's PC is not at the latest service pack.", "The user's PC has out-of-date anti-virus software."]
			},
			{
				ques: "Which of the following would be implemented to allow access to services while segmenting access to the internal network?",
				ans: "NAT",
				ansSel: ["IPSec", "VPN", "DMZ"]
			},
			{
				ques: "A security administrator needs to separate two departments. Which of the following would the administrator implement to perform this?",
				ans: "VLAN",
				ansSel: ["Cloud computing", "Load balancer", "MAC filtering"]
			},
			{
				ques: "Which of the following is a security control that is lost when using cloud computing?",
				ans: "Physical control of the data",
				ansSel: ["Logical control of the data", "Access to the application's administrative settings", "Administrative access to the data"]
			},
			{
				ques: "Which of the following protocols should be blocked at the network perimeter to prevent host enumeration by sweep devices?",
				ans: "ICMP",
				ansSel: ["HTTPS", "SSH", "IPv4"]
			},
			{
				ques: "Which of the following uses TCP port 22 by default?",
				ans: "SSH, SCP, and SFTP",
				ansSel: ["SSL, SCP, and TFTP", "HTTPS, SFTP, and TFTP", "TLS, TELNET, and SCP"]
			},
			{
				ques: "Which of the following allows a security administrator to set device traps?",
				ans: "SNMP",
				ansSel: ["TLS", "ICMP", "SSH"]
			},
			{
				ques: "A security administrator needs to implement a site-to-site VPN tunnel between the main office and a remote branch. Which of the following protocols should be used for the tunnel?",
				ans: "IPSec",
				ansSel: ["RTP", "SNMP", "802.1X"]
			},
			{
				ques: "Which of the following protocols would be the MOST secure method to transfer files from a host machine?",
				ans: "SFTP",
				ansSel: ["WEP", "TFTP", "FTP"]
			},
			{
				ques: "Which of the following port numbers is used for SCP, by default?",
				ans: "22",
				ansSel: ["69", "80", "443"]
			},
			{
				ques: "Which of the following is the MOST secure method of utilizing FTP?",
				ans: "FTPS",
				ansSel: ["FTP active", "FTP passive", "SCP"]
			},
			{
				ques: "Which of the following protocols can be implemented to monitor network devices?",
				ans: "SNMP",
				ansSel: ["IPSec", "FTPS", "SFTP"]
			},
			{
				ques: "Which of the following protocols would an administrator MOST likely use to monitor the parameters of network devices?",
				ans: "SNMP",
				ansSel: ["NetBIOS", "ICMP", "SMTP"]
			},
			{
				ques: "A remote office is reporting they are unable to access any of the network resources from the main office. The security administrator realizes the error and corrects it. The administrator then tries to ping the router at the remote office and receives no reply; however, the technician is able to telnet to that router. Which of the following is the MOST likely cause of the security administrator being unable to ping the router?",
				ans: "The remote router has ICMP blocked.",
				ansSel: ["The remote switch is turned off.", "The remote router has IPSec blocked.", "The main office's router has ICMP blocked."]
			},
			{
				ques: "A network administrator is implementing a network addressing scheme that uses a long string of both numbers and alphanumeric characters to create addressing options and avoid duplicates. Which of the following describes a protocol built for this purpose?",
				ans: "IPv6",
				ansSel: ["ICMP", "IGMP", "IPv4"]
			},
			{
				ques: "In which of the following locations would a forensic analyst look to find a hooked process?",
				ans: "BIOS",
				ansSel: ["Slack space", "RAM", "Rootkit"]
			},
			{
				ques: "Which of the following file transfer protocols is an extension of SSH?",
				ans: "SFTP",
				ansSel: ["FTP", "TFTP", "FTPS"]
			},
			{
				ques: "Which of the following secure protocols is MOST commonly used to remotely administer Unix/Linux systems?",
				ans: "SSH",
				ansSel: ["SCP", "SFTP", "SNMP"]
			},
			{
				ques: "The security administrator notices a number of TCP connections from the development department to the test network segregation. Large volumes of data are being transmitted between the two networks only on port 22. Which of the following is MOST likely occurring?",
				ans: "The development team is transferring data to test systems using SFTP and SCP.",
				ansSel: ["The development team is transferring data to test systems using FTP and TFTP.", "The development team is transferring data to test systems using SCP and TELNET.", "The development team is transferring data to test systems using SSL and SFTP."]
			},
			{
				ques: "An administrator who wishes to block all database ports at the firewall should include which of the following ports in the block list?",
				ans: "1433",
				ansSel: ["445", "1501", "3389"]
			},
			{
				ques: "If a security administrator wants to TELNET into a router to make configuration changes, which of the following ports would need to be open by default?",
				ans: "23",
				ansSel: ["135", "161", "3389"]
			},
			{
				ques: "Which of the following ports would a security administrator block if the administrator wanted to stop users from accessing outside SMTP services?",
				ans: "25",
				ansSel: ["21", "110", "143"]
			},
			{
				ques: "A network consists of various remote sites that connect back to two main locations. The security administrator needs to block TELNET access into the network. Which of the following, by default, would be the BEST choice to accomplish this goal?",
				ans: "Block port 23 on the network firewall.",
				ansSel: ["Block port 23 on the L2 switch at each remote site.", "Block port 25 on the L2 switch at each remote site.", "Block port 25 on the network firewall."]
			},
			{
				ques: "In an 802.11n network, which of the following provides the MOST secure method of both encryption and authorization?",
				ans: "WPA Enterprise",
				ansSel: ["WEP with 802.1x", "WPA with TKIP", "WPA2-PSK"]
			},
			{
				ques: "Isolation mode on an AP provides which of the following functionality types?",
				ans: "Segmentation of each wireless user from other wireless users",
				ansSel: ["Disallows all users from communicating directly with the AP", "Hides the service set identifier", "Makes the router invisible to other routers"]
			},
			{
				ques: "Which of the following is the BEST choice for encryption on a wireless network?",
				ans: "WPA2-PSK",
				ansSel: ["AES", "WPA", "WEP"]
			},
			{
				ques: "A user reports that their 802.11n capable interface connects and disconnects frequently to an access point that was recently installed. The user has a Bluetooth enabled laptop. A company in the next building had their wireless network breached last month. Which of the following is MOST likely causing the disconnections?",
				ans: "The new access point was mis-configured and is interfering with another nearby access point.",
				ansSel: ["An attacker inside the company is performing a bluejacking attack on the user's laptop.", "Another user's Bluetooth device is causing interference with the Bluetooth on the laptop.", "The attacker that breached the nearby company is in the parking lot implementing a war driving attack."]
			},
			{
				ques: "Which of the following should the security administrator look at FIRST when implementing an AP to gain more coverage?",
				ans: "Power levels",
				ansSel: ["Encryption methods", "SSID", "Radio frequency"]
			},
			{
				ques: "Which of the following protocols requires the use of a CA based authentication process?",
				ans: "PEAP-TLS",
				ansSel: ["FTPS implicit", "FTPS explicit", "MD5"]
			},
			{
				ques: "When configuring multiple computers for RDP on the same wireless router, it may be necessary to do which of the following?",
				ans: "Forward to different RDP listening ports.",
				ansSel: ["Turn off port forwarding for each computer.", "Enable DMZ for each computer.", "Enable AP isolation on the router."]
			},
			{
				ques: "A technician needs to limit the wireless signal from reaching outside of a building. Which of the following actions should the technician take?",
				ans: "Enable MAC filtering in the WAP",
				ansSel: ["Disable the SSID broadcast on the WAP", "Place the WAP antenna on the exterior wall of the building", "Decrease the power levels on the WAP"]
			},
			{
				ques: "Which of the following will provide the HIGHEST level of wireless network security?",
				ans: "WPA2",
				ansSel: ["SSH", "SSID", "WEP"]
			},
			{
				ques: "Which of the following facilitates computing for heavily utilized systems and networks?",
				ans: "Provider cloud",
				ansSel: ["Remote access", "VPN concentrator", "Telephony"]
			},
			{
				ques: "Risk can be managed in the following ways EXCEPT:",
				ans: "elimination.",
				ansSel: ["mitigation.", "acceptance.", "transference."]
			},
			{
				ques: "A company that purchases insurance to reduce risk is an example of which of the following?",
				ans: "Risk transference",
				ansSel: ["Risk deterrence", "Risk acceptance", "Risk avoidance"]
			},
			{
				ques: "Which of the following is a best practice to identify fraud from an employee in a sensitive position?",
				ans: "Mandatory vacations",
				ansSel: ["Acceptable usage policy", "Separation of duties", "False positives"]
			},
			{
				ques: "A security administrator with full administrative rights on the network is forced to temporarily take time off of their duties. Which of the following describes this form of access control?",
				ans: "Mandatory vacation",
				ansSel: ["Separation of duties", "Discretionary", "Least privilege"]
			},
			{
				ques: "Instead of giving a security administrator full administrative rights on the network, the administrator is given rights only to review logs and update security related network devices. Additional rights are handed out to network administrators for the areas that fall within their job description. Which of the following describes this form of access control?",
				ans: "Least privilege",
				ansSel: ["Mandatory vacation", "Discretionary", "Job rotation"]
			},
			{
				ques: "A security administrator wants to determine what data is allowed to be collected from users of the corporate Internet-facing web application. Which of the following should be referenced?",
				ans: "Privacy policy",
				ansSel: ["Human Resources policy", "Appropriate use policy", "Security policy"]
			},
			{
				ques: "An administrator is updating firmware on routers throughout the company. Where should the administrator document this work?",
				ans: "Change Management System",
				ansSel: ["Event Viewer", "Router's System Log", "Compliance Review System"]
			},
			{
				ques: "Due to sensitive data concerns, a security administrator has enacted a policy preventing the use of flash drives. Additionally, which of the following can the administrator implement to reduce the risk of data leakage?",
				ans: "Enact a policy banning users from bringing in personal music devices.",
				ansSel: ["Enact a policy that all work files are to be password protected.", "Provide users with unencrypted storage devices that remain on-site.", "Disallow users from saving data to any network share."]
			},
			{
				ques: "Performing routine security audits is a form of which of the following controls?",
				ans: "Detective",
				ansSel: ["Preventive", "Protective", "Proactive"]
			},
			{
				ques: "Which of the following is MOST commonly a part of routine system audits?",
				ans: "User rights and permissions reviews",
				ansSel: ["Job rotation", "Business impact analysis", "Penetration testing"]
			},
			{
				ques: "Which of the following is a method to prevent ad-hoc configuration mistakes?",
				ans: "Implement a change management strategy",
				ansSel: ["Implement an auditing strategy", "Implement an incident management strategy", "Implement a patch management strategy"]
			},
			{
				ques: "Which of the following should be reviewed periodically to ensure a server maintains the correct security configuration?",
				ans: "User rights",
				ansSel: ["NIDS configuration", "Firewall logs", "Incident management"]
			},
			{
				ques: "A security administrator finished taking a forensic image of a computer's memory. Which of the following should the administrator do to ensure image integrity?",
				ans: "Run the image through SHA256.",
				ansSel: ["Run the image through AES128.", "Run the image through a symmetric encryption algorithm.", "Compress the image to a password protected archive."]
			},
			{
				ques: "Which of the following BEST explains the security benefit of a standardized server image?",
				ans: "Mandated security configurations have been made to the operating system.",
				ansSel: ["All current security updates for the operating system will have already been applied.", "Anti-virus software will be installed and current.", "Operating system license use is easier to track."]
			},
			{
				ques: "Which of the following describes when forensic hashing should occur on a drive?",
				ans: "Before and after the imaging process and then hash the forensic image",
				ansSel: ["After the imaging process and before the forensic image is captured", "Before the imaging process and then after the forensic image is created", "After the imaging process and after the forensic image is captured"]
			},
			{
				ques: "Which of the following assists in identifying if a system was properly handled during transport?",
				ans: "Chain of custody",
				ansSel: ["Take a device system image", "Review network traffic and logs", "Track man hours and incident expense"]
			},
			{
				ques: "Which of the following describes the purpose of chain of custody as applied to forensic image retention?",
				ans: "To provide documentation as to who has handled the evidence",
				ansSel: ["To provide proof the evidence has not been tampered with or modified", "To provide verification that the forensic examiner is qualified", "To provide a baseline reference"]
			},
			{
				ques: "Which of the following is a policy that would force all users to organize their areas as well as help in reducing the risk of possible data theft?",
				ans: "Clean desk policy",
				ansSel: ["Password behaviors", "Data handling", "Data disposal"]
			},
			{
				ques: "Which of the following will educate employees about malicious attempts from an attacker to obtain bank account information?",
				ans: "Phishing techniques",
				ansSel: ["Password complexity requirements", "Handling PII", "Tailgating techniques"]
			},
			{
				ques: "Which of the following is a reason to perform user awareness and training?",
				ans: "To minimize the organizational risk posed by users",
				ansSel: ["To enforce physical security requirements by staff", "To comply with law and vendor software best practices", "To identify the staff's personally owned electronic devices"]
			},
			{
				ques: "On-going annual awareness security training should be coupled with:",
				ans: "signing of a user agreement.",
				ansSel: ["succession planning", "implementation of security controls.", "user rights and permissions review."]
			},
			{
				ques: "Which of the following risks may result from improper use of social networking and P2P software?",
				ans: "Information disclosure",
				ansSel: ["Shoulder surfing", "Denial of service", "Data loss prevention"]
			},
			{
				ques: "Which of the following is the MAIN reason to require data labeling?",
				ans: "To ensure that staff understands what data they are handling and processing",
				ansSel: ["To ensure that new viruses do not transfer to removable media", "To ensure that all media sanitation requirements are met", "To ensure that phishing attacks are identified and labeled properly"]
			},
			{
				ques: "DRPs should contain which of the following?",
				ans: "Hierarchical list of critical systems",
				ansSel: ["Hierarchical list of non-critical personnel", "Hierarchical access control lists", "Identification of single points of failure"]
			},
			{
				ques: "Recovery Point Objectives and Recovery Time Objectives directly relate to which of the following BCP concepts?",
				ans: "Business impact analysis",
				ansSel: ["Succession planning", "Remove single points of failure", "Risk management"]
			},
			{
				ques: "A security firm has been engaged to assess a software application. A production-like test environment, login details, production documentation and source code have been provided. Which of the following types of testing is being described?",
				ans: "White box",
				ansSel: ["Gray box", "Black box", "Red teaming"]
			},
			{
				ques: "Which of the following environmental controls would BEST be used to regulate cooling within a datacenter?",
				ans: "Hot and cold aisles",
				ansSel: ["Fire suppression", "Video monitoring", "EMI shielding"]
			},
			{
				ques: "Which of the following environmental variables reduces the potential for static discharges?",
				ans: "Humidity",
				ansSel: ["EMI", "Temperature", "UPS"]
			},
			{
				ques: "Which of the following should be considered when trying to prevent somebody from capturing network traffic?",
				ans: "EMI shielding",
				ansSel: ["Video monitoring", "Hot aisles", "HVAC controls"]
			},
			{
				ques: "With which of the following is RAID MOST concerned?",
				ans: "Availability",
				ansSel: ["Integrity", "Confidentiality", "Baselining"]
			},
			{
				ques: "Which of the following reduces the likelihood of a single point of failure when a server fails?",
				ans: "Clustering",
				ansSel: ["Virtualization", "RAID", "Cold site"]
			},
			{
				ques: "Which of the following is the BEST way to secure data for the purpose of retention?",
				ans: "Off-site backup",
				ansSel: ["RAID 5 on-site backup", "On-site clustering", "Virtualization"]
			},
			{
				ques: "A security administrator is in charge of a datacenter, a hot site and a cold site. Due to a recent disaster, the administrator needs to ensure that their cold site is ready to go in case of a disaster. Which of the following does the administrator need to ensure is in place for a cold site?",
				ans: "Location that meets power and connectivity requirements",
				ansSel: ["Location with all required equipment loaded with all current patches and updates", "Location near the datacenter that meets power requirements", "Location with duplicate systems found in the datacenter"]
			},
			{
				ques: "A critical system in the datacenter is not connected to a UPS. The security administrator has coordinated an authorized service interruption to resolve this issue. This is an example of which of the following?",
				ans: "Fault tolerance",
				ansSel: ["Continuity of operations", "Succession planning", "Data handling error"]
			},
			{
				ques: "In order to ensure high availability of all critical servers, backups of the main datacenter are done in the middle of the night and then the backup tapes are taken to an offsite location. Which of the following would ensure the minimal amount of downtime in the case of a disaster?",
				ans: "the offsite location of tapes also be the hot site",
				ansSel: ["Having the offsite location of tapes also be the standby server", "Having the offsite location of tapes also be the cold site", "Having the offsite location of tapes also be the warm site"]
			},
			{
				ques: "Which of the following concepts ensures that the data is only viewable to authorized users?",
				ans: "Confidentiality",
				ansSel: ["Availability", "Biometrics", "Integrity"]
			},
			{
				ques: "A bulk update process fails and writes incorrect data throughout the database. Which of the following concepts describes what has been compromised?",
				ans: "Integrity",
				ansSel: ["Authenticity", "Availability", "Confidentiality"]
			},
			{
				ques: "A user downloads a keygen to install pirated software. After running the keygen, system performance is extremely slow and numerous anti-virus alerts are displayed. Which of the following BEST describes this type of malware?",
				ans: "Trojan",
				ansSel: ["Logic bomb", "Worm", "Adware"]
			},
			{
				ques: "While browsing the Internet, an administrator notices their browser behaves erratically, appears to download something, and then crashes. Upon restarting the PC, the administrator notices performance is extremely slow and there are hundreds of outbound connections to various websites. Which of the following BEST describes what has occurred?",
				ans: "The PC has become part of a botnet.",
				ansSel: ["The PC has become infected with spyware.", "The PC has become infected with adware.", "The PC has become a spam host."]
			},
			{
				ques: "Which of the following is the primary difference between a virus and a worm?",
				ans: "A worm is self-replicating",
				ansSel: ["A worm is undetectable", "A virus is typically larger", "A virus is easily removed"]
			},
			{
				ques: "Logs from an IDS show that a computer has been compromised with a botnet and is actively communicating with a command and control server. If the computer is powered off, which of the following data types will be unavailable for later investigation?",
				ans: "Memory, network processes, and system processes",
				ansSel: ["Swap files, system processes, and master boot record", "System disk, email, and log files", "Memory, temporary file system, and archival storage"]
			},
			{
				ques: "Upon investigation, an administrator finds a suspicious system-level kernel module which modifies file system operations. This is an example of which of the following?",
				ans: "Rootkit",
				ansSel: ["Trojan", "Virus", "Logic bomb"]
			},
			{
				ques: "Which of the following is the MOST likely cause of a single computer communicating with an unknown IRC server and scanning other systems on the network?",
				ans: "Botnet",
				ansSel: ["Worm", "Spyware", "Rootkit"]
			},
			{
				ques: "Which of the following malware types is MOST commonly installed through the use of thumb drives to compromise systems and provide unauthorized access?",
				ans: "Trojans",
				ansSel: ["Botnets", "Adware", "Logic bomb"]
			},
			{
				ques: "A system administrator could have a user level account and an administrator account to prevent:",
				ans: "escalation of privileges.",
				ansSel: ["password sharing.", "implicit deny.", "administrative account lockout."]
			},
			{
				ques: "When examining HTTP server logs the security administrator notices that the company's online store crashes after a particular search string is executed by a single external user. Which of the following BEST describes this type of attack?",
				ans: "DoS",
				ansSel: ["Spim", "DDoS", "Spoofing"]
			},
			{
				ques: "Which of the following would allow traffic to be redirected through a malicious machine by sending false hardware address updates to a switch?",
				ans: "ARP poisoning",
				ansSel: ["MAC spoofing", "pWWN spoofing", "DNS poisoning"]
			},
			{
				ques: "Which of the following threats corresponds with an attacker targeting specific employees of a company?",
				ans: "Spear phishing",
				ansSel: ["Phishing", "Pharming", "Man-in-the-middle"]
			},
			{
				ques: "A user receives an automated call which appears to be from their bank. The automated recording provides details about the bank's privacy policy, security policy and requests that the user clearly tate their name, birthday and enter the banking details to validate the user's identity. Which of the following BEST describes this type of attack?",
				ans: "Vishing",
				ansSel: ["Phishing", "Spoofing", "Pharming"]
			},
			{
				ques: "Which of the following is a technique designed to obtain information from a specific person?",
				ans: "Spear phishing",
				ansSel: ["Smurf attack", "DNS poisoning", "Pharming"]
			},
			{
				ques: "Which of the following is another name for a malicious attacker?",
				ans: "Black hat",
				ansSel: ["White hat", "Penetration tester", "Fuzzer"]
			},
			{
				ques: "Which of the following logical controls does a flood guard protect against?",
				ans: "SYN attacks",
				ansSel: ["Spanning tree", "Xmas attacks", "Botnet attack"]
			},
			{
				ques: "Which of the following attacks is BEST described as the interruption of network traffic accompanied by the insertion of malicious code?",
				ans: "Man-in-the-middle",
				ansSel: ["Spoofing", "Spear phishing", "DoS"]
			},
			{
				ques: "A targeted email attack sent to the company's Chief Executive Officer (CEO) is known as which of the following?",
				ans: "Whaling",
				ansSel: ["Bluesnarfing", "Vishing", "Dumpster diving"]
			},
			{
				ques: "Which of the following security threats does shredding mitigate?",
				ans: "Dumpster diving",
				ansSel: ["Shoulder surfing", "Document retention", "Tailgating"]
			},
			{
				ques: "Which of the following attacks would password masking help mitigate?",
				ans: "Shoulder surfing",
				ansSel: ["Brute force", "Tailgating", "Impersonation"]
			},
			{
				ques: "Which of the following is an example of allowing another user physical access to a secured area without validation of their credentials?",
				ans: "Tailgating",
				ansSel: ["Evil twin", "Impersonation", "Shoulder surfing"]
			},
			{
				ques: "Which of the following is specific to a buffer overflow attack?",
				ans: "Initial vector",
				ansSel: ["Memory addressing", "Directory traversal", "Session cookies"]
			},
			{
				ques: "Which of the following wireless attacks uses a counterfeit base station with the same SSID name as a nearby intended wireless network?",
				ans: "Evil twin",
				ansSel: ["War driving", "Rogue access point", "War chalking"]
			},
			{
				ques: "Data can potentially be stolen from a disk encrypted, screen-lock protected, smart phone by which of the following?",
				ans: "Bluesnarfing",
				ansSel: ["IV attack", "Honeynet", "SIM cloning"]
			},
			{
				ques: "Which of the following is an unauthorized wireless router that allows access to a secure network?",
				ans: "Rogue access point",
				ansSel: ["Interference", "War driving", "Evil twin"]
			},
			{
				ques: "A security administrator performs several war driving routes each month and recently has noticed a certain area with a large number of unauthorized devices. Which of the following attack types is MOST likely occurring?",
				ans: "Rogue access points",
				ansSel: ["Interference", "IV attack", "Bluejacking"]
			},
			{
				ques: "Proper wireless antenna placement and radio power setting reduces the success of which of the following reconnaissance methods?",
				ans: "War driving",
				ansSel: ["Rogue APs", "Packet analysis", "RF interference"]
			},
			{
				ques: "A rogue access point with the same SSID as the production wireless network is found. Which of the following BEST describes this attack?",
				ans: "Evil twin",
				ansSel: ["Vishing", "War driving", "Bluesnarfing"]
			},
			{
				ques: "A programmer allocates 16 bytes for a string variable, but does not adequately ensure that more than 16 bytes cannot be copied into the variable. This program may be vulnerable to which of the following attacks?",
				ans: "Buffer overflow",
				ansSel: ["Cross-site scripting", "Session hijacking", "Directory traversal"]
			},
			{
				ques: "Which of the following MUST a programmer implement to prevent cross-site scripting?",
				ans: "Validate input to remove hypertext",
				ansSel: ["Validate input to remove shell scripts", "Validate input to remove Java bit code", "Validate input to remove batch files"]
			},
			{
				ques: "Which of the following web application security weaknesses can be mitigated by preventing the use of HTML tags?",
				ans: "Cross-site scripting",
				ansSel: ["LDAP injection", "SQL injection", "Error and exception handling"]
			},
			{
				ques: "During the analysis of malicious code, a security analyst discovers JavaScript being used to send random data to another service on the same system. This is MOST likely an example of which of the following?",
				ans: "Buffer overflow",
				ansSel: ["XML injection", "SQL injection", "Distributed denial of service"]
			},
			{
				ques: "Which of the following attacks is manifested as an embedded HTML image object or JavaScript image tag in an email?",
				ans: "Cross-site scripting",
				ansSel: ["Exception handling", "Adware", "Cross-site request forgery"]
			},
			{
				ques: "A web application has been found to be vulnerable to a SQL injection attack. Which of the following BEST describes the required remediation action?",
				ans: "Add input validation to forms.",
				ansSel: ["Change the server's SSL key and add the previous key to the CRL.", "Install a host-based firewall.", "Install missing security updates for the operating system."]
			},
			{
				ques: "An application log shows that the text &quottest; rm -rf /etc/passwd&quot was entered into an HTML form. Which of the following describes the type of attack that was attempted?",
				ans: "Command injection",
				ansSel: ["Session hijacking", "Buffer overflow", "SQL injection"]
			},
			{
				ques: "Which of the following is MOST relevant to a buffer overflow attack?",
				ans: "NOOP instructions",
				ansSel: ["Sequence numbers", "Set flags", "IV length"]
			},
			{
				ques: "The detection of a NOOP sled is an indication of which of the following attacks?",
				ans: "Buffer overflow",
				ansSel: ["SQL injection", "Cross-site scripting", "Directory transversal"]
			},
			{
				ques: "Which of the following devices BEST allows a security administrator to identify malicious activity after it has occurred?",
				ans: "IDS",
				ansSel: ["Spam filter", "Firewall", "Malware inspection"]
			},
			{
				ques: "Which of the following should be enabled to ensure only certain wireless clients can access the network?",
				ans: "MAC filtering",
				ansSel: ["DHCP", "SSID broadcast", "AP isolation"]
			},
			{
				ques: "Which of the following BEST describes an intrusion prevention system?",
				ans: "A system that stops an attack in progress.",
				ansSel: ["A system that allows an attack to be identified.", "A system that logs the attack for later analysis.", "A system that serves as a honeypot."]
			},
			{
				ques: "Which of the following is a best practice when securing a switch from physical access?",
				ans: "Disable unused ports",
				ansSel: ["Disable unnecessary accounts", "Print baseline configuration", "Enable access lists"]
			},
			{
				ques: "Two systems are being designed. System A has a high availability requirement. System B has a high security requirement with less emphasis on system uptime. Which of the following configurations BEST fits the need for each system?",
				ans: "System A fails open. System B fails closed.",
				ansSel: ["System A and System B both fail closed.", "System A and System B both fail open.", "System A fails closed. System B fails open."]
			},
			{
				ques: "Several staff members working in a datacenter have reported instances of tailgating. Which of the following could be implemented to prevent this security concern?",
				ans: "Mantraps",
				ansSel: ["Proximity readers", "Video surveillance", "Biometric keypad"]
			},
			{
				ques: "A visitor plugs their laptop into the network and receives a warning about their anti-virus being out-of-date along with various patches that are missing. The visitor is unable to access the Internet or any network resources. Which of the following is the MOST likely cause?",
				ans: "The IPS detected that the visitor's laptop did not have the right patches and updates so it prevented its access to the network.",
				ansSel: ["The IDS detected that the visitor's laptop did not have the right patches and updates so the IDS blocked access to the network.", "The security posture is enabled on the network and remediation must take place before access is given to the visitor on that laptop.", "The security posture is disabled on the network but remediation must take place before access is given to the visitor on that laptop."]
			},
			{
				ques: "Which of the following is a detective security control?",
				ans: "CCTV",
				ansSel: ["Firewall", "Design reviews", "Bollards"]
			},
			{
				ques: "Which of the following identifies some of the running services on a system?",
				ans: "Determine open ports",
				ansSel: ["Review baseline reporting", "Review honeypot logs", "Risk calculation"]
			},
			{
				ques: "A security administrator is tasked with revoking the access of a terminated employee. Which of the following account policies MUST be enacted to ensure the employee no longer has access to the network?",
				ans: "Account disablement",
				ansSel: ["Account lockout", "Password recovery", "Password expiration"]
			},
			{
				ques: "A company needs to be able to prevent entry, at all times, to a highly sensitive area inside a public building. In order to ensure the BEST type of physical security, which of the following should be implemented?",
				ans: "Mantrap",
				ansSel: ["Intercom system", "Video surveillance", "Nightly guards"]
			},
			{
				ques: "Which of the following would provide the MOST reliable proof that a datacenter was accessed at a certain time of day?",
				ans: "Video surveillance",
				ansSel: ["Security log", "Entry log", "Proximity readers"]
			},
			{
				ques: "A new enterprise solution is currently being evaluated due to its potential to increase the company's profit margins. The security administrator has been asked to review its security implications. While evaluating the product, various vulnerability scans were performed. It was determined that the product is not a threat but has the potential to introduce additional vulnerabilities. Which of the following assessment types should the security administrator also take into consideration while evaluating this product?",
				ans: "Risk assessment",
				ansSel: ["Threat assessment", "Vulnerability assessment", "Code assessment"]
			},
			{
				ques: "Which of the following would be the BEST action to perform when conducting a corporate vulnerability assessment?",
				ans: "Organize data based on severity and asset value.",
				ansSel: ["Document scan results for the change control board.", "Update anti-virus signatures and apply patches.", "Examine the vulnerability data using a network analyzer."]
			},
			{
				ques: "Which of the following is used when performing a quantitative risk analysis?",
				ans: "Asset value",
				ansSel: ["Focus groups", "Surveys", "Best practice"]
			},
			{
				ques: "Which of the following describes a passive attempt to identify weaknesses?",
				ans: "Vulnerability scanning",
				ansSel: ["Zero day attack", "Port scanning", "Penetration testing"]
			},
			{
				ques: "An existing application has never been assessed from a security perspective. Which of the following is the BEST assessment technique in order to identify the application's security posture?",
				ans: "Baseline reporting",
				ansSel: ["Protocol analysis", "Threat modeling", "Functional testing"]
			},
			{
				ques: "An administrator identifies a security issue on the corporate web server, but does not attempt to exploit it. Which of the following describes what the administrator has done?",
				ans: "Vulnerability scan",
				ansSel: ["Penetration test", "Social engineering", "Risk mitigation"]
			},
			{
				ques: "The server log shows 25 SSH login sessions per hour. However, it is a large company and the administrator does not know if this is normal behavior or if the network is under attack. Where should the administrator look to determine if this is normal behavior?",
				ans: "Baseline reporting",
				ansSel: ["Change management", "Code review", "Security policy"]
			},
			{
				ques: "Users of specific systems are reporting that their data has been corrupted. After a recent patch update to those systems, the users are still reporting issues of data being corrupt. Which of the following assessment techniques need to be performed to identify the issue?",
				ans: "Vulnerability scan",
				ansSel: ["Hardware baseline review", "Data integrity check", "Penetration testing"]
			},
			{
				ques: "Which of the following is used when performing a qualitative risk analysis?",
				ans: "Judgment",
				ansSel: ["Exploit probability", "Threat frequency", "Asset value"]
			},
			{
				ques: "Upper management decides which risk to mitigate based on cost. This is an example of:",
				ans: "quantitative risk assessment.",
				ansSel: ["qualitative risk assessment.", "business impact analysis.", "risk management framework."]
			},
			{
				ques: "A security administrator wants to know which systems are more susceptible to an attack compared to other systems on the network. Which of the following assessment tools would be MOST effective?",
				ans: "Vulnerability scanner",
				ansSel: ["Network design review", "Baseline review", "Port scanner"]
			},
			{
				ques: "Which of the following is a management control type?",
				ans: "Vulnerability scanning",
				ansSel: ["Least privilege implementation", "Baseline configuration development", "Session locks"]
			},
			{
				ques: "Which of the following devices would allow a technician to view IP headers on a data packet?",
				ans: "Protocol analyzer",
				ansSel: ["NIDS", "VPN switch", "Firewall"]
			},
			{
				ques: "Which of the following penetration testing types is performed by security professionals with limited inside knowledge of the network?",
				ans: "Gray box",
				ansSel: ["Passive vulnerability scan", "White box", "Black box"]
			},
			{
				ques: "Which of the following is a reason to perform a penetration test?",
				ans: "To determine the impact of a threat against the enterprise",
				ansSel: ["To passively test security controls within the enterprise", "To identify all vulnerabilities and weaknesses within the enterprise", "To provide training to white hat attackers"]
			},
			{
				ques: "Penetration testing should only be used during controlled conditions with express consent of the system owner because:",
				ans: "penetration testing actively tests security controls and can cause system instability.",
				ansSel: ["white box penetration testing cannot identify zero day exploits.", "penetration testing passively tests policy controls and can identify vulnerabilities.", "vulnerability scanners can cause massive network flooding during risk assessments."]
			},
			{
				ques: "Which of the following security practices should occur initially in software development?",
				ans: "Secure code review",
				ansSel: ["Patch management", "Fuzzing", "Penetration tests"]
			},
			{
				ques: "A penetration test shows that almost all database servers were able to be compromised through a default database user account with the default password. Which of the following is MOST likely missing from the operational procedures?",
				ans: "Application hardening",
				ansSel: ["OS hardening", "Application patch management", "SQL injection"]
			},
			{
				ques: "Which of the following is an example of verifying new software changes on a test system?",
				ans: "Patch management",
				ansSel: ["User access control", "Intrusion prevention", "Application hardening"]
			},
			{
				ques: "Which of the following allows an attacker to identify vulnerabilities within a closed source software application?",
				ans: "Fuzzing",
				ansSel: ["Compiling", "Code reviews", "Vulnerability scanning"]
			},
			{
				ques: "A security administrator ensures that certain characters and commands entered on a web server are not interpreted as legitimate data and not passed on to backend servers. This is an example of which of the following?",
				ans: "Input validation",
				ansSel: ["Error and exception handling", "Determining attack surface", "Data execution prevention"]
			},
			{
				ques: "A business-critical application will be installed on an Internet facing server. Which of the following is the BEST security control that should be performed in conjunction with updating the application to the MOST current version?",
				ans: "Vendor-provided hardening documentation should be reviewed and applied.",
				ansSel: ["The firewall should be configured to allow the application to auto-update.", "A port scan should be run against the application's server.", "The firewall should be configured to prevent the application from auto-updating."]
			},
			{
				ques: "Which of the following has a programmer MOST likely failed to consider if a user entering improper input is able to crash a program?",
				ans: "Error handling",
				ansSel: ["SDLM", "CRC", "Data formatting"]
			},
			{
				ques: "Which of the following is the MOST efficient way to combat operating system vulnerabilities?",
				ans: "Patch management",
				ansSel: ["Anti-spam", "Locking cabinets", "Screen locks"]
			},
			{
				ques: "Which of the following is a hardening step of an application during the SDLC?",
				ans: "Secure coding concepts",
				ansSel: ["Disabling unnecessary accounts", "Application patch management schedule", "Disabling unnecessary services"]
			},
			{
				ques: "Which of the following is the BEST way to mitigate data loss if a portable device is compromised?",
				ans: "Full disk encryption",
				ansSel: ["Common access card", "Strong password complexity", "Biometric authentication"]
			},
			{
				ques: "Which of the following should be performed if a smart phone is lost to ensure no data can be retrieved from it?",
				ans: "Remote wipe",
				ansSel: ["Device encryption", "Screen lock", "GPS tracking"]
			},
			{
				ques: "Several classified mobile devices have been stolen. Which of the following would BEST reduce the data leakage threat?",
				ans: "Remotely sanitize the devices.",
				ansSel: ["Use GPS tracking to find the devices.", "Use stronger encryption algorithms.", "Immediately inform local law enforcement."]
			},
			{
				ques: "Which of the following should be used to help prevent device theft of unused assets?",
				ans: "Locking cabinet",
				ansSel: ["HSM device", "Device encryption", "GPS tracking"]
			},
			{
				ques: "Which of the following devices would be installed on a single computer to prevent intrusion?",
				ans: "Host-based firewall",
				ansSel: ["Host intrusion detection", "Network firewall", "VPN concentrator"]
			},
			{
				ques: "A security administrator has been receiving support tickets for unwanted windows appearing on user's workstations. Which of the following can the administrator implement to help prevent this from happening?",
				ans: "Pop-up blockers",
				ansSel: ["Screen locks", "Host-based firewalls", "Anti-virus"]
			},
			{
				ques: "Which of the following would an administrator apply to mobile devices to BEST ensure the confidentiality of data?",
				ans: "Device encryption",
				ansSel: ["Screen locks", "Remote sanitation", "Anti-virus software"]
			},
			{
				ques: "Which of the following is a security vulnerability that can be disabled for mobile device users?",
				ans: "GPS tracking",
				ansSel: ["Group policy", "Remote wipe", "Pop-up blockers"]
			},
			{
				ques: "Which of the following software should a security administrator implement if several users are stating that they are receiving unwanted email containing advertisements?",
				ans: "Anti-spam",
				ansSel: ["Host-based firewalls", "Anti-spyware", "Anti-virus"]
			},
			{
				ques: "An employee stores their list of passwords in a spreadsheet on their local desktop hard drive. Which of the following encryption types would protect this information from disclosure if lost or stolen?",
				ans: "Mobile device",
				ansSel: ["Database", "Removable media", "File and folder level"]
			},
			{
				ques: "A company has remote workers with laptops that house sensitive data. Which of the following can be implemented to recover the laptops if they are lost?",
				ans: "GPS tracking",
				ansSel: ["Whole disk encryption", "Remote sanitation", "NIDS"]
			},
			{
				ques: "When decommissioning old hard drives, which of the following is the FIRST thing a security engineer should do?",
				ans: "Perform bit level erasure or overwrite",
				ansSel: ["Flash the hard drive firmware", "Use a waste disposal facility", "Format the drive with NTFS"]
			},
			{
				ques: "Which of the following BEST describes the function of TPM?",
				ans: "Hardware chip that stores encryption keys",
				ansSel: ["High speed secure removable storage device", "Third party certificate trust authority", "A trusted OS model"]
			},
			{
				ques: "Which of the following is MOST likely to result in data loss?",
				ans: "Developers copying data from production to the test environments via a USB stick.",
				ansSel: ["Encrypted backup tapes left unattended at reception for off-site storage.", "Accounting transferring confidential staff details via SFTP to the payroll department.", "Back office staff accessing and updating details on the mainframe via SSH."]
			},
			{
				ques: "A security administrator is implementing a solution that can integrate with an existing server and provide encryption capabilities. Which of the following would meet this requirement?",
				ans: "HSM",
				ansSel: ["Mobile device encryption", "Full disk encryption", "TPM"]
			},
			{
				ques: "A company needs to reduce the risk of employees emailing confidential data outside of the company. Which of the following describes an applicable security control to mitigate this threat?",
				ans: "Install a network-based DLP device",
				ansSel: ["Prevent the use of USB drives", "Implement transport encryption", "Configure the firewall to block port 110"]
			},
			{
				ques: "Which of the following can cause hardware based drive encryption to see slower deployment?",
				ans: "A lack of management software",
				ansSel: ["USB removable drive encryption", "Role/rule-based access control", "Multi-factor authentication with smart cards"]
			},
			{
				ques: "Which of the following is the MOST secure way of storing keys or digital certificates used for decryption/encryption of SSL sessions?",
				ans: "HSM",
				ansSel: ["Database", "Key escrow", "Hard drive"]
			},
			{
				ques: "Which of the following is a removable device that may be used to encrypt in a high availability clustered environment?",
				ans: "HSM",
				ansSel: ["Cloud computer", "Biometrics", "TPM"]
			},
			{
				ques: "During incident response, which of the following procedures would identify evidence tampering by outside entities?",
				ans: "Hard drive hashing",
				ansSel: ["Annualized loss expectancy", "Developing audit logs", "Tracking man hours and incident expenses"]
			},
			{
				ques: "Which of the following protocols only encrypts password packets from client to server?",
				ans: "RADIUS",
				ansSel: ["XTACACS", "TACACS", "TACACS+"]
			},
			{
				ques: "Which of the following methods of access, authentication, and authorization is the MOST secure by default?",
				ans: "Kerberos",
				ansSel: ["TACACS", "RADIUS", "LDAP"]
			},
			{
				ques: "Which of the following uses tickets to identify users to the network?",
				ans: "Kerberos",
				ansSel: ["RADIUS", "LDAP", "TACACS+"]
			},
			{
				ques: "A purpose of LDAP authentication services is:",
				ans: "a single point of user management.",
				ansSel: ["to implement mandatory access controls", "to prevent multi-factor authentication.", "to issue one-time hashed passwords."]
			},
			{
				ques: "When granting access, which of the following protocols uses multiple-challenge responses for authentication, authorization and audit?",
				ans: "TACACS+",
				ansSel: ["TACACS", "LDAP", "RADIUS"]
			},
			{
				ques: "A security administrator is setting up a corporate wireless network using WPA2 with CCMP but does not want to use PSK for authentication. Which of the following could be used to support 802.1x authentication?",
				ans: "RADIUS",
				ansSel: ["LDAP", "Kerberos", "Smart card"]
			},
			{
				ques: "Which of the following authentication services would be used to authenticate users trying to access a network device?",
				ans: "TACACS+",
				ansSel: ["SSH", "SNMPv3", "TELNET"]
			},
			{
				ques: "Which of the following requires special handling and explicit policies for data retention and data distribution?",
				ans: "Personally identifiable information",
				ansSel: ["Phishing attacks", "Zero day exploits", "Personal electronic devices"]
			},
			{
				ques: "Centrally authenticating multiple systems and applications against a federated user database is an example of:",
				ans: "single sign-on.",
				ansSel: ["smart card.", "common access card.", "access control list."]
			},
			{
				ques: "A Human Resource manager is assigning access to users in their specific department performing the same job function. This is an example of:",
				ans: "role-based access control.",
				ansSel: ["rule-based access control.", "centralized access control.", "mandatory access control."]
			},
			{
				ques: "The security administrator often observes that an employee who entered the datacenter does not match the owner of the PIN that was entered into the keypad. Which of the following would BEST prevent this situation?",
				ans: "Biometrics",
				ansSel: ["Multifactor authentication", "Username and password", "Mandatory access control"]
			},
			{
				ques: "Which of the following allows a user to have a one-time password?",
				ans: "Tokens",
				ansSel: ["Biometrics", "SSO", "PIV"]
			},
			{
				ques: "Which of the following is a technical control?",
				ans: "Least privilege implementation",
				ansSel: ["System security categorization requirement", "Baseline configuration development", "Contingency planning"]
			},
			{
				ques: "A thumb print scanner is used to test which of the following aspects of human authentication?",
				ans: "Something a user is",
				ansSel: ["Something a user did", "Something a user has", "Something a user knows"]
			},
			{
				ques: "A security administrator with full administrative rights on the network is forced to change roles on a quarterly basis with another security administrator. Which of the following describes this form of access control?",
				ans: "Job rotation",
				ansSel: ["Separation of duties", "Mandatory vacation", "Least privilege"]
			},
			{
				ques: "In order to access the network, an employee must swipe their finger on a device. Which of the following describes this form of authentication?",
				ans: "Biometrics",
				ansSel: ["Single sign-on", "Multi-factor", "Tokens"]
			},
			{
				ques: "A proximity card reader is used to test which of the following aspects of human authentication?",
				ans: "Something a user has",
				ansSel: ["Something a user knows", "Something a user is", "Something a user did"]
			},
			{
				ques: "Which of the following would be considered multi-factor authentication?",
				ans: "Pin number and a smart card",
				ansSel: ["ACL entry and a pin number", "Username and password", "Common access card"]
			},
			{
				ques: "Which of the following is a form of photo identification used to gain access into a secure location?",
				ans: "CAC",
				ansSel: ["Token", "DAC", "Biometrics"]
			},
			{
				ques: "Which of the following is a trusted OS implementation used to prevent malicious or suspicious code from executing on Linux and UNIX platforms?",
				ans: "SELinux",
				ansSel: ["vmlinuz", "System File Checker (SFC)", "Tripwire"]
			},
			{
				ques: "Which of the following is an example of allowing a user to perform a self-service password reset?",
				ans: "Password recovery",
				ansSel: ["Password length", "Password complexity", "Password expiration"]
			},
			{
				ques: "Which of the following is an example of requiring users to have a password of 16 characters or more?",
				ans: "Password length requirements",
				ansSel: ["Password recovery requirements", "Password complexity requirements", "Password expiration requirements"]
			},
			{
				ques: "A security administrator is asked to email an employee their password. Which of the following account policies MUST be set to ensure the employee changes their password promptly?",
				ans: "Password expiration",
				ansSel: ["Account lockout", "Password recovery", "Account enablement"]
			},
			{
				ques: "Employees are required to come up with a passphrase of at least 15 characters to access the corporate network. Which of the following account policies does this exemplify?",
				ans: "Password length",
				ansSel: ["Password expiration", "Password complexity", "Password lockout"]
			},
			{
				ques: "An administrator has implemented a policy that passwords expire after 60 days and cannot match their last six previously used passwords. Users are bypassing this policy by immediately changing their passwords six times and then back to the original password. Which of the following can the administrator MOST easily employ to prevent this unsecure practice, with the least administrative effort?",
				ans: "Create a policy that passwords cannot be changed more than once a day.",
				ansSel: ["Create a policy that passwords must be no less than ten characters.", "Monitor user accounts and lock user accounts that are changing passwords excessively.", "Monitor user accounts and change passwords of users found to be doing this."]
			},
			{
				ques: "Which of the following MUST be implemented in conjunction with password history, to prevent a user from re-using the same password?",
				ans: "Minimum age time",
				ansSel: ["Maximum age time", "Lockout time", "Expiration time"]
			},
			{
				ques: "Which of the following represents the complexity of a password policy which enforces lower case password using letters from 'a' through 'z' where 'n' is the password length?",
				ans: "26n",
				ansSel: ["n26", "2n * 26", "n2 * 26"]
			},
			{
				ques: "Which of the following BEST describes the process of key escrow?",
				ans: "Maintains a secured copy of a user's private key for the sole purpose of recovering the key if it is lost",
				ansSel: ["Maintains a copy of a user's public key for the sole purpose of recovering messages if it is lost", "Maintains a secured copy of a user's public key in order to improve network performance", "Maintains a secured copy of a user's private key to recover the certificate revocation list"]
			},
			{
				ques: "The fundamental difference between symmetric and asymmetric key cryptographic systems is that symmetric key cryptography uses:",
				ans: "the same key on each end of the transmission medium.",
				ansSel: ["multiple keys for non-repudiation of bulk data.", "bulk encryption for data transmission over fiber.", "different keys on both ends of the transport medium."]
			},
			{
				ques: "Which of the following methods BEST describes the use of hiding data within other files?",
				ans: "Steganography",
				ansSel: ["Digital signatures", "PKI", "Transport encryption"]
			},
			{
				ques: "When a user first moves into their residence, the user receives a key that unlocks and locks their front door. This key is only given to them but may be shared with others they trust. Which of the following cryptography concepts is illustrated in the example above?",
				ans: "Symmetric key sharing",
				ansSel: ["Asymmetric key sharing", "Exchange of digital signatures", "Key escrow exchange"]
			},
			{
				ques: "Which of the following cryptography types provides the same level of security but uses smaller key sizes and less computational resources than logarithms which are calculated against a finite field?",
				ans: "Elliptical curve",
				ansSel: ["Diffie-Hellman", "Quantum", "El Gamal"]
			},
			{
				ques: "The BEST way to protect the confidentiality of sensitive data entered in a database table is to use:",
				ans: "hashing.",
				ansSel: ["stored procedures.", "encryption.", "transaction logs."]
			},
			{
				ques: "WEP is seen as an unsecured protocol based on its improper use of which of the following?",
				ans: "RC4",
				ansSel: ["RC6", "3DES", "AES"]
			},
			{
				ques: "Which of the following is used in conjunction with PEAP to provide mutual authentication between peers?",
				ans: "MSCHAPv2",
				ansSel: ["LEAP", "PPP", "MSCHAPv1"]
			},
			{
				ques: "Which of the following is seen as non-secure based on its ability to only store seven uppercase characters of data making it susceptible to brute force attacks?",
				ans: "LANMAN",
				ansSel: ["PAP", "NTLMv2", "CHAP"]
			},
			{
				ques: "Which of the following access control technologies provides a rolling password for one-time use?",
				ans: "RSA tokens",
				ansSel: ["ACL", "Multi-factor authentication", "PIV card"]
			},
			{
				ques: "A security administrator has discovered through a password auditing software that most passwords can be discovered by cracking the first seven characters and then cracking the second part of the password. Which of the following is in use by the company?",
				ans: "LANMAN",
				ansSel: ["MD5", "WEP", "3DES"]
			},
			{
				ques: "NTLM is an improved and substantially backwards compatible replacement for which of the following?",
				ans: "passwd",
				ansSel: ["3DES", "LANMAN", "PGP"]
			},
			{
				ques: "Which of the following does a TPM allow for?",
				ans: "Full disk encryption",
				ansSel: ["Cloud computing", "Application hardening", "Input validation"]
			},
			{
				ques: "The company encryption policy requires all encryption algorithms used on the corporate network to have a key length of 128-bits. Which of the following algorithms would adhere to company policy?",
				ans: "AES",
				ansSel: ["DES", "SHA", "3DES"]
			},
			{
				ques: "The security administrator wants to ensure messages traveling between point A and point B are encrypted and authenticated. Which of the following accomplishes this task?",
				ans: "RSA",
				ansSel: ["MD5", "Diffie-Hellman", "Whole disk encryption"]
			},
			{
				ques: "Which of the following elements of PKI are found in a browser's trusted root CA?",
				ans: "Public key",
				ansSel: ["Private key", "Symmetric key", "Recovery key"]
			},
			{
				ques: "Where are revoked certificates stored?",
				ans: "CRL",
				ansSel: ["Recovery agent", "Registration", "Key escrow"]
			},
			{
				ques: "Which of the following asymmetric encryption keys is used to encrypt data to ensure only the intended recipient can decrypt the cipher-text?",
				ans: "Public",
				ansSel: ["Private", "Escrow", "Preshared"]
			},
			{
				ques: "Which of the following must a security administrator do when the private key of a web server has been compromised by an intruder?",
				ans: "Submit the public key to the CRL.",
				ansSel: ["Use the recovery agent to revoke the key.", "Submit the private key to the CRL.", "Issue a new CA."]
			},
			{
				ques: "Which of the following PKI implementation element is responsible for verifying the authenticity of certificate contents?",
				ans: "CA",
				ansSel: ["CRL", "Key escrow", "Recovery agent"]
			},
			{
				ques: "If a user wishes to receive a file encrypted with PGP, the user must FIRST supply the:",
				ans: "public key.",
				ansSel: ["recovery agent.", "key escrow account.", "private key."]
			},
			{
				ques: "A certificate that has been compromised should be published to which of the following?",
				ans: "CRL",
				ansSel: ["AES", "CA", "PKI"]
			},
			{
				ques: "The security administrator is tasked with authenticating users to access an encrypted database. Authentication takes place using PKI and the encryption of the database uses a separate cryptographic process to decrease latency. Which of the following would describe the use of encryption in this situation?",
				ans: "Public key encryption to authenticate users and private keys to encrypt the database",
				ansSel: ["Private key encryption to authenticate users and private keys to encrypt the database", "Public key encryption to authenticate users and public keys to encrypt the database", "Private key encryption to authenticate users and public keys to encrypt the database"]
			},
			{
				ques: "When a certificate issuer is not recognized by a web browser, which of the following is the MOST common reason?",
				ans: "Self-signed certificate",
				ansSel: ["Lack of key escrow", "Weak certificate pass-phrase", "Weak certificate cipher"]
			},
			{
				ques: "Public keys are used for which of the following?",
				ans: "Decrypting the hash of an electronic signature",
				ansSel: ["Decrypting wireless messages", "Bulk encryption of IP based email traffic", "Encrypting web browser traffic"]
			},
			{
				ques: "Which of the following is a requirement when implementing PKI if data loss is unacceptable?",
				ans: "Key escrow",
				ansSel: ["Web of trust", "Non-repudiation", "Certificate revocation list"]
			},
			{
				ques: "The recovery agent is used to recover the:",
				ans: "private key.",
				ansSel: ["root certificate.", "key in escrow.", "public key."]
			},
			{
				ques: "Which of the following is true about the CRL?",
				ans: "It should be kept public",
				ansSel: ["It signs other keys", "It must be kept secret", "It must be encrypted"]
			}
		]
	},
	options = {
		//help: '<ul><li class="pdf"><a href="docs/secplusobj.pdf" target ="_blank">Comptia Security + (2011 Objectives)</a><li></ul>',
		intro: "This Security + practice exam is comprised of 245 questions from SY0-301/JK0-018 exams. These questions will familiarize and help you study for your test. Once started, click &quot;Check&quot; after answering to check your answer then select &quotNext&quot to proceed. Good luck!" +
		"<h3>Actual exam:</h3>" +
		"<ul><li>90min long</li><li>100 questions</li><li>Passing score = 750 on a 100-900 scale</li></ul>",
		allRandom: true,
		title: "",
		disableDelete: true,
		showWrongAns: true,
		statusUpdate: function(quizInfo) {
			$(".q-score-track").remove();
			var score = "<div class='q-score-track'><span><img src='css/images/tick.png'> "+ quizInfo.numOfRight +" </span><span><img src='css/images/x.png'> "+ quizInfo.numOfWrong +" </span></div>";
			$(".q-counter").after(score);
		}
	};
	$("#quizArea").jQuizMe(quiz, options);
	
	$(".q-leftArrow").val("<<");
	$(".q-rightArrow").val(">>");
	$(".q-quitNo-btn").val("continue");
	$(".q-missMarker").text(" check to show incorrect only - *");	
});
